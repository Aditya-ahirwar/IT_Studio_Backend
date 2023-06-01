import mongoose from "mongoose";

const RowSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    phone :{
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true
    },
    hobby :{
        type : String,
        required : true
    }
});

export default mongoose.model('rows', RowSchema)