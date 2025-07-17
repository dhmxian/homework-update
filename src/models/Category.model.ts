import { Schema, model } from "mongoose";

const categorySchema = new Schema({
    categoryName:{
        type: String,
        require: true,
        trim: true,
        minLength: 3,
        maxLength: 50,
    },
    description:{
        type: String,
        require: false,
        maxLength: 500,
    },
    slug:{
        type: String,
        require: true,
        unique: true,
        trim: true,
        lowercase: true, 
        minLength: 3,
        maxLength: 255,
    }
},{
    timestamps: true,
    versionKey: false,
    collection: 'categories'
});

 const Category = model('Category', categorySchema);

export default Category;