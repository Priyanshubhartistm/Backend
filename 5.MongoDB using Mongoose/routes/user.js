const express = require('express');
const router = express.Router();

const user = require('../models/userModels');

// Example route to get all users

// CRUD operations can be added here

// view/read
router.get('/users', async (req, res) => {
    console.log("recived request for post")
    try {
        const users = await user.find();
        res.status(200).json(users);
        
    }
    catch (err) {
        res.status(500).json({ 
            success: false,
            message: err.message });
    }

})

// create

router.post('/users', async (req, res) => {
    try {
        const {name, age, weight} = req.body;
        const newUser = new user({name, age, weight});
        await newUser.save();
        
    }
    catch (err) {
        res.status(500).json({ 
            success: false,
            message: err.message
        });
    }
});


// delete
router.delete('/users/:id', async (req, res) => {
    const { id } = req.params;

    try{
        const deletedUser = await user.findByIdAndDelete(id);

        if(!deletedUser){
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        // if user found and deleted successfully
        res.status(200).json({
            success: true,
            message: "User deleted successfully",
            data: deletedUser
        });

    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

module.exports = router;