const express = require('express')
// const getItemController = require('../controllers/getItems.controller')
const { getItemController, postItemsController,  deleteItemController, updateItemById, getItemByIdController } = require('../controllers/items.controller')

const router = express.Router()

router.get('/getitems',getItemController)

router.get('/:id', getItemByIdController);


router.post('/postitems',postItemsController)


router.put('/:id', updateItemById);

router.delete('/:id',deleteItemController)

module.exports = router