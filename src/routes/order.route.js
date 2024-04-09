const { postOrderController, getOrderController } = require('../controllers/orders.controller')

const express = require('express')

const router = express.Router()

router.get('/getorders',getOrderController)

router.post('/postorder',postOrderController)

module.exports = router