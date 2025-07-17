import { Schema, model } from "mongoose";

const orderSchema = new Schema({
    customerId:{
    type: Schema.Types.ObjectId, 
    required: true,
    ref: 'Customer',
    },
  // Notes: 1 = Pending; 2 = Processing; 3 = Rejected; 4 = Completed
    orderStatus:{
    type: Number, 
    required: true,
    enum: [1, 2, 3, 4], 
    default: 1 
  },
    orderDate:{
    type: Date, 
    default: Date.now 
  },
  requireDate:{
    type: Date,
    required: false 
  },
  shippingDate:{
    type: Date,
  },
  staffId:{
    type: Schema.Types.ObjectId, 
    ref: 'Staff', 
    required: false 
  },
  orderNote:{
    type: String,
    required: false 
  },
  street:{
    type: String,
    maxLength: 255, 
    required: true 
  },
  city:{
    type: String,
    maxLength: 50,
    required: true
  },
  state:{
    type: String,
    maxLength: 50,
    required: true
  },
  // Notes: 1 = COD; 2 = Credit; 3 = ATM; 4 = Cash
  paymentType: {
    type: Number, 
    required: true,
    enum: [1, 2, 3, 4] 
  }
},{
    timestamps: true,
    versionKey: false,
    collection: 'orders'
});

 const Order = model('Order', orderSchema);

export default Order;