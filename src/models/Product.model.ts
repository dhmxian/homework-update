import { Schema, model } from "mongoose";

const productSchema = new Schema({
    productName:{
        type: String,
        require: true,
        trim: true,
        minLength: 3,
        maxLength: 255,
    },
    description:{
        type: String,
        require: false,
        maxLength: 500,
    },
    price:{
        type: Number,
        require: true,
        min: 0,
        default: 0,
    },
    stock:{
        type: Number,
        require: true,
        min: 0,
        default: 0,
    },
    discount:{
        type: Number,
        require: true,
        min: 0,
        max: 70,
        default: 0,
    },
    modelYear:{
        type: Number,
        require: true,
        min: 1900,
        max: new Date().getFullYear(),
    },
    thumbnail:{
        type: String,
        require: false,
        trim: true,
        maxLength: 255,
    },
    categoryId:{
        type: Schema.Types.ObjectId,
        ref: 'Category',
        require: true,
    },
    brandId:{
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        require: true,
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
    collection: 'products'
});

 const Product = model('Product', productSchema);

export default Product;