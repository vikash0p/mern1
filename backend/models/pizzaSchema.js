import mongoose from 'mongoose'

const pizzaSchema=new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    rating:{
        type:String,
        require:true,
    },
    img:{
        type:String,
        require:true,
    }

})

const pizza=mongoose.model("pizza", pizzaSchema);
export default pizza