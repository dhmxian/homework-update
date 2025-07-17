import { Schema, model } from "mongoose";

const brandSchema = new Schema({
    brandName:{
        type: String,
        require: true,
        trim: true,
        unique: true,
        minLength: 3,
        maxLength: 100,
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
    collection: 'brands'
});

 const Brand = model('Brand', brandSchema);

export default Brand;