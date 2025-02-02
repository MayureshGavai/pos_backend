const mongoose = require('mongoose')


const orderSchema = mongoose.Schema(
    {
        billNumber : {
            type : Number,
            required: true
        },
        customerName : {
            type: String,
            required: true
        },
        customerNumber : {
            type: String,
            required: true
        },
        hostName : {
            type: String,
            required: true
        },
        order : {
            type: Array,
            required: true
        },
        orderNumber : {
            type : Number,
            required: true
        },
        orderDate : {
            type : Date,
            required : true
        },
        paymentOption : {
            type: String,
            required: true
        },
        subTotal : {
            type: Number,
            required: true
        },
        tax : {
            type: Number,
            required: true
        },
        total : {
            type: Number,
            required: true
        },    
    },
    { timestamps: true }
)

module.exports = mongoose.model('Orders',orderSchema)