import { Schema, model } from "mongoose";

const staffSchema = new Schema({
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
    active:{
        type: Number,
        default: 0,
        min: 0,
        max: 1,
    },
    password:{
        type: String,
        require: true,
        trim: true,
        minLength: 6,
        maxLength: 255
    }
    
},{
    timestamps: true,
    versionKey: false,
    collection: 'staffs'
});

 const Staff = model('Staff', staffSchema);

export default Staff;
							
							
	
		
				
					
				
