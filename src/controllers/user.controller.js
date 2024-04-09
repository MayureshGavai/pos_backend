const userModel = require('../model/user.model')


const registerController = async (req, res) => {
    console.log(req.body);
    try {
        const { name, empId, password } = req.body;
        // Check if username is provided
        if (!name || !empId || !password) {
            return res.status(400).send("Name, empId, and password are required");
        }
        const newUser = new userModel({ name, empId, password, verified: true });
        await newUser.save();
        res.status(201).send("New user added successfully");
    } catch (err) {
        // Check for duplicate key error
        if (err.code === 11000) {
            return res.status(400).send("Username already exists");
        }
        res.status(500).send("Error: " + err.message);
        console.error(err);
    }
};


const loginController = async (req,res) =>{
    const {empId,password} = req.body
    try{
        const employee = await userModel.findOne({empId, password, verified:true})
        if(employee && employee.verified){
            res.status(200).send({
                // message: "Successfully LoggedIn",
                user: employee
            });
        } else {
            res.status(401).json({
                message: "Failed to Login. User not found or not verified.",
                employee: employee
            });
        }
    }catch(err){
        console.log(err)
        res.send(err)
    }
}


module.exports = {
    registerController,
    loginController
}