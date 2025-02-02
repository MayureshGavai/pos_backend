const express = require("express")
const { getTodaySalesController, getSalesReportByDateRangeController, getTodaySalesReportController, getDateRangeSalesController } = require("../controllers/reports.controller")

const router = express.Router()

router.get('/get-today-sales',getTodaySalesController)
router.post('/get-date-sales',getDateRangeSalesController)
router.post('/get-today-sales-report',getTodaySalesReportController)
router.post('/get-date-sales-report', getSalesReportByDateRangeController)

module.exports = router