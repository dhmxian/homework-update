import { Schema, model } from "mongoose";

const customerSchema = new Schema({
    firstName:{
        type: String,
        require: true,
        trim: true,
        minLength: 3,
        maxLength: 50,
    },
    lastName:{
        type: String,
        require: true,
        trim: true,
        minLength: 3,
        maxLength: 50,
    }, 
    phone:{
        type: Number,
        require: true,
        unique: true,
        max: 50,
    },
    email:{
        type: String,
        require: true,
        unique: true,
        trim: true,
        minLength: 3,
        maxLenth: 150,
    },
    city:{
        type: String,
        require: true,
        trim: true,
        maxLength: 50,
    },
    state:{
        type: String,
        require: true,
        trim: true,
        maxLength: 50,
    },
    zip_code:{
        type: Number,
        require: false,
        max: 5,
    },
    password:{
        type: String,
        require: false,
        trim: true,
        maxLength: 255
    }
},{
    timestamps: true,
    versionKey: false,
    collection: 'customers'
});

 const Customer = model('Customer', customerSchema);

export default Customer;
							
							
	
		
				
					
				
