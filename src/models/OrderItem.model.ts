import { Schema, model } from "mongoose";

const orderItemSchema = new Schema({
    item_id: { 
        type: Number, 
        required: true,
    },
    productId:{
        type: Schema.Types.ObjectId, 
        required: true,
        ref: 'Product',
    },
    quantity: {
        type: Number, 
        required: true,
        default: 0,
        min: 0
    },
    price:{
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
    }
},{
    timestamps: true,
    versionKey: false,
    collection: 'orderItems'
});

const OrderItem = model('OrderItem', orderItemSchema);

export default OrderItem;