const orderModel = require('../model/order.model')
const ExcelJS = require("exceljs")

const generateExcelReport = async (orders) => {
    const workbook = new ExcelJS.Workbook()
    const worksheet = workbook.addWorksheet("Sales Report")

    worksheet.columns = [
        { header: "Item", key: "name", width: 30 },
        { header: "Quantity", key: "quantity", width: 15 },
        { header: "Amount", key: "amount", width: 15 },
    ]

    let totalAmount = 0
    const itemMap = new Map()

    orders.forEach((order) => {
        order.order.forEach((item) => {
            const { name, price, quantity } = item
            const totalPrice = price * quantity

            if (itemMap.has(name)) {
                const existing = itemMap.get(name)
                existing.quantity += quantity
                existing.amount += totalPrice
            } else {
                itemMap.set(name, { name, quantity, amount: totalPrice })
            }

            totalAmount += totalPrice
        })
    })

    Array.from(itemMap.values()).forEach((item) => {
        worksheet.addRow(item)
    })

    worksheet.addRow(["", "Total:", totalAmount])

    const lastRow = worksheet.lastRow
    lastRow.eachCell((cell) => {
        cell.font = { bold: true }
    })

    return workbook.xlsx.writeBuffer()
}

const getReportData = async (orders) => {
    let totalAmount = 0;
    const itemMap = new Map();

    orders.forEach((order) => {
        order.order.forEach((item) => {
            const { name, price, quantity } = item;
            const totalPrice = price * quantity;

            if (itemMap.has(name)) {
                const existing = itemMap.get(name);
                existing.quantity += quantity;
                existing.amount += totalPrice;
            } else {
                itemMap.set(name, { name, quantity, amount: totalPrice });
            }

            totalAmount += totalPrice;
        });
    });

    const reportData = Array.from(itemMap.values());

    return {
        items: reportData,
        totalAmount: totalAmount
    }
}

const getTodaySalesReportController = async (req, res) => {
    try {
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        const endOfDay = new Date()
        endOfDay.setHours(23, 59, 59, 999)

        const orders = await orderModel.find({
            orderDate: { $gte: today, $lte: endOfDay },
        })

        if (orders.length === 0) {
            return res.status(404).json({ message: "No report data today." })
        }

        const buffer = await generateExcelReport(orders)
        res.setHeader("Content-Disposition", "attachment filename=today_sales.xlsx")
        res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
        res.send(buffer)
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Error generating today's report", error: err.message })
    }
}

const getSalesReportByDateRangeController = async (req, res) => {
    try {
        console.log(req.body)
        const { fromDate, toDate } = req.body

        if (!fromDate || !toDate) {
            return res.status(400).json({ message: "Both fromDate and toDate are required" })
        }

        const startDate = new Date(fromDate)
        startDate.setHours(0, 0, 0, 0)
        const endDate = new Date(toDate)
        endDate.setHours(23, 59, 59, 999)

        const orders = await orderModel.find({
            orderDate: { $gte: startDate, $lte: endDate },
        })

        if (orders.length === 0) {
            return res.status(404).json({ message: "No report data for the selected date range." })
        }

        const buffer = await generateExcelReport(orders)
        res.setHeader("Content-Disposition", `attachment; filename=sales_report_${fromDate}_to_${toDate}.xlsx`);
        res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        res.end(buffer)
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Error generating report", error: err.message })
    }
}

const getTodaySalesController = async (req, res) => {
    try {
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        const endOfDay = new Date()
        endOfDay.setHours(23, 59, 59, 999)

        const orders = await orderModel.find({
            orderDate: { $gte: today, $lte: endOfDay },
        })

        if (orders.length === 0) {
            return res.status(404).json({ message: "No orders today." })
        }

        const reportData = await getReportData(orders)
        
        res.status(200).json(reportData)
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Internal server error", error: err.message })
    }
}

const getDateRangeSalesController = async (req, res) => {
    try {
        const { fromDate, toDate } = req.body

        if (!fromDate || !toDate) {
            return res.status(400).json({ message: "Both fromDate and toDate are required" })
        }

        const startDate = new Date(fromDate)
        startDate.setHours(0, 0, 0, 0)
        const endDate = new Date(toDate)
        endDate.setHours(23, 59, 59, 999)

        const orders = await orderModel.find({
            orderDate: { $gte: startDate, $lte: endDate },
        })

        if (orders.length === 0) {
            return res.status(404).json({ message: "No orders found in this date range." })
        }

        const reportData = await getReportData(orders)

        res.status(200).json(reportData)
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Internal server error", error: err.message })
    }
}

module.exports = {getTodaySalesController, getDateRangeSalesController, getTodaySalesReportController, getSalesReportByDateRangeController}