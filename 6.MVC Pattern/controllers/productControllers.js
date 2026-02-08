const Product = require('../models/productModel');

// business logic for creating a new product

const getAllProducts = async (req, res) => {
    try {
        const allProducts = await Product.find();

        if(!allProducts){
            res.json({
                message: "No products found"
            })
        }
        res.status(200).json({
            success: true,
            products: allProducts,
        })
    }


        catch(err) {
            res.status(500).json({
                success: false,
                message: "err.message"
            })
        }
    }

    module.exports = {
        getAllProducts,
    };