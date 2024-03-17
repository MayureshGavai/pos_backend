const itemModel = require("../model/item.model");

const getItemController = async (req, res) => {
  try {
    const items = await itemModel.find();
    res.status(200).send(items);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const getItemByIdController = async (req, res) => {
  const {itemId} = req.params
  try {
    const item = await itemModel.findById({_id:itemId});
    res.status(200).send(item);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};



const postItemsController = async (req, res) => {
  try {
    // Extract data from request body
    const { itemName, itemPrice, itemCategory, itemImage } = req.body;

    // Check if all required fields are present
    if (!itemName || !itemPrice || !itemCategory || !itemImage) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Create a new item object
    const newItem = new itemModel({
        name: itemName,
        price: itemPrice,
        category: itemCategory,
        image: itemImage
    });

    // Save the new item to the database
    await newItem.save();

    // Send success response
    res.status(200).json({ message: 'New Item Added Successfully!' });
} catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal Server Error' });
}
};


const updateItemById = async (req, res) => {
  const { itemId } = req.params;
  const { itemName, itemPrice, itemCategory, itemImage } = req.body;

  try {
    const updatedItem = await Item.findByIdAndUpdate({_id: itemId}, {
      itemName,
      itemPrice,
      itemCategory,
      itemImage
    }, { new: true });

    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.status(200).json(updatedItem);
  } catch (error) {
    console.error('Error updating item:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteItemController = async (req, res) => {
  try {
    const { _id } = req.params;
    const deletedItem = await itemModel.findByIdAndDelete({_id});
    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


module.exports = {
  getItemController,
  getItemByIdController,
  postItemsController,
  updateItemById,
  deleteItemController
};
