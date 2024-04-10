import mongoose from 'mongoose';
import pizza from '../models/pizzaSchema.js';

//! create the pizza controller
export const CreatePizza = async (req, res) => {
    const { title, description, price, rating, img } = req.body;
    try {
        // Change the variable name to something else, like 'newPizza'
        const newPizza = await pizza.create({ title, description, price, rating, img });

        res.json({
            message: "Pizza created successfully!",
            success: true,
            pizza: newPizza // Return the created pizza document
        });
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({
            message: "Failed to create pizza!",
            success: false,
            error: error.message
        });
    }
}

//! get all pizza
export const getAllPizza = async (req,res)=>{
try {
    const newPizza= await pizza.find();
    res.status(201).json({
        message:"fetch the pizza data successfully !",
        success:true,
        newPizza,
    })

} catch (error) {
    console.log("Error:", error);
    res.status(500).json({
        message: "Failed to fetch pizza!",
        success: false,
        error: error.message
    });

}

}

//!get single data
export const GetPizzaById = async (req, res) => {
    const { id } = req.params; // Assuming the pizza ID is passed as a route parameter

    try {
        const singlePizza = await pizza.findById(id); // Find pizza by its ID

        if (!singlePizza) {
            // If pizza with given ID doesn't exist
            return res.status(404).json({
                success: false,
                message: "Pizza not found"
            });
        }

        // If pizza with given ID exists, return it
        res.json({
            message:"fetch the single pizza data successfully !",
            success: true,
            singlePizza
        });
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({
            message: "Failed to retrieve pizza",
            success: false,
            error: error.message
        });
    }
}



//! Delete a pizza by ID
export const DeletePizzaById = async (req, res) => {
    const { id } = req.params; // Assuming the pizza ID is passed as a route parameter

    try {
        const deletedPizza = await pizza.findByIdAndDelete(id); // Find and delete pizza by its ID

        if (!deletedPizza) {
            // If pizza with given ID doesn't exist
            return res.status(404).json({
                success: false,
                message: "Pizza not found, nothing deleted"
            });
        }

        // If pizza with given ID exists and is successfully deleted
        res.json({
            success: true,
            message: "Pizza deleted successfully",
            pizza: deletedPizza
        });
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({
            message: "Failed to delete pizza",
            success: false,
            error: error.message
        });
    }
}

//!update pizza by id
export const UpdatePizzaById = async (req, res) => {
    const { id } = req.params; // Assuming the pizza ID is passed as a route parameter
    const { title, description, price, rating, img } = req.body;

    try {
        const updatedPizza = await pizza.findByIdAndUpdate(id, { title, description, price, rating, img }, { new: true });

        if (!updatedPizza) {
            // If pizza with given ID doesn't exist
            return res.status(404).json({
                success: false,
                message: "Pizza not found, nothing updated"
            });
        }

        // If pizza with given ID exists and is successfully updated
        res.json({
            success: true,
            message: "Pizza updated successfully",
            pizza: updatedPizza
        });
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({
            message: "Failed to update pizza",
            success: false,
            error: error.message
        });
    }
}