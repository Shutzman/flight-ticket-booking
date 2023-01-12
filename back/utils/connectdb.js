import mongoose from 'mongoose'
import asyncHandler from 'express-async-handler'
// import colors from 'colors'

const connectDB = asyncHandler(async (req , res) => {
    try {
        await mongoose.connect('mongodb+srv://DOflights:1234@cluster0.amg8fhx.mongodb.net/?retryWrites=true&w=majority' , { useUnifiedTopology: true , useNewUrlParser : true , useCreateIndex : true})
        console.log('SUCCESSFULLY TO CONNECTED DB')
    }
    catch (error){
        console.log(error)
        throw new Error(error);
    }
})

export default connectDB