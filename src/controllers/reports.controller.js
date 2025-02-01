const orderModel = require('../model/order.model')
const ExcelJS = require("exceljs")

const generateExcelReport = async (orders) => {
    const workbook = new ExcelJS.Workbook()
    const worksheet = workbook.addWorksheet("Sales Report")

    worksheet.columns = [
        {header : "Item", key : "name", width : 30},
        {header : "Quantity", key : "quantity", width: 15},
        {header : "Amount", key : "amount", width : 15}
    ]

    let totalAmount = 0;
    const itemMap = new Map()

    orders.forEach(order => {
        order.order.forEach(item => {
            const {name, price, quantity} = item
            const totalPrice = price * quantity
            
            if(itemMap.has(name)){
                const exisiting = itemMap.get(name)
                exisiting.quantity += quantity
                exisiting.amount += totalPrice
            }else{
                itemMap.set(name, {name, quantity, amount : totalPrice})
            }

            totalAmount += totalPrice
        })
    })

    Array.from(itemMap.values()).forEach(item => {
        worksheet.addRow(item)
    })

    worksheet.addRow(["","Total:",totalAmount])

    const lastRow = worksheet.lastRow
    lastRow.eachCell(cell => {
        cell.font = {bold:true}
    })

    const buffer = await workbook.xlsx.writeBuffer()
    return buffer
}

const getTodaySalesReport = async (req,res) => {
    try{
        const today = new Date()
        today.setHours(0,0,0,0)
        const endOfday = new Date()
        endDay.setHours(23,59,599,999)

        const orders = await orderModel.find({
            createdAt : {$gte : today, $lte : endOfday}
        })

        if(orders.length === 0){
            return res.status(404).json({message : "No report data today."})
        }

        const buffer = await generateExcelReport(orders)
        res.setHeader("Content-Disposition", `attachment; filename=today_sales.xlsx`)
        res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
        res.send(buffer)

    }catch(error){
        console.log(err)
        res.status(500).json({message:"Error in Generating Report",error: err.message})
    }
}

const getSalesReportByDateRange = async (req,res) => {
    try{
        const {fromDate , toDate} = req.body

        if (!fromDate || !toDate) {
            return res.status(400).json({ message: "Both fromDate and toDate are required" })
        }

        const startDate = new Date(fromDate)
        startDate.setHours(0,0,0,0)
        const endDate = new Date(toDate)
        endDate.setHours(23,59,59,999)

        const orders = await orderModel.find({
            createdAt : {$gte : startDate, $lte : endDate}
        })

        if(orders.length === 0){
            return res.status(404).json({message : "No report data today."})
        }

        const buffer = await generateExcelReport(orders)
        res.setHeader("Content-Disposition", `attachment; filename=sales_report_${fromDate}_to_${toDate}.xlsx`)
        res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
        res.send(buffer)

    }catch(error){
        console.log(err)
        res.status(500).json({message:"Error in Generating Report",error: err.message})
    }
}


//display reports controller


module.exports = {getTodaySalesReport, getSalesReportByDateRange}