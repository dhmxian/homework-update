import dotenv from "dotenv";
import app from './app';
import mongoose from "mongoose";

dotenv.config({ path: '.env'});
const PORT = process.env.PORT || 8080;;

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});

mongoose 
.connect('mongodb://localhost:27017/Batch193')
.then (()=>{
    console.log('Connect to MongoDB successfully');
})
.catch((error)=>{
    console.log('Error connecting to MongoDB', error);
});