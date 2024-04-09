const orderModel = require('../model/order.model')


const postOrderController = async (req,res) => {
    try{
        console.log(req.body)
    const {billNumber, contactNumber, customerName, hostName, order, orderNumber, paymentOption, subTotal, tax, total} = req.body
    
    if (!billNumber || !contactNumber || !customerName || !hostName || !order || !orderNumber || !paymentOption || !subTotal || !tax || !total) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    
    const newOrder = new orderModel({
        billNumber : billNumber,
        customerNumber : contactNumber,
        customerName : customerName,
        hostName : hostName,
        order : order,
        orderNumber : orderNumber,
        paymentOption : paymentOption,
        subTotal : subTotal,
        tax : tax,
        total : total
    })

    await newOrder.save()

    res.status(200).json({message : 'New Order Successfully!'})
    }catch(err){
        console.log(err)
        res.status(500).json({ message: 'Failed to create new order', error: err.message });
    }
}

const getOrderController = async (req,res) => {
    try {
        const orders = await orderModel.find();
        res.status(200).send(orders);
      } catch (err) {
        console.log(err);
        res.status(500).json({message:"Internal Server Error",error: err.message});
      }
} 

module.exports = {postOrderController, getOrderController}