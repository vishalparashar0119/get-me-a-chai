import mongoose from "mongoose";
const {model , Schema } = mongoose

const UserSchema =  new Schema({
     email:{ type : String  , required : true },
     name : {type : String },
     userName : {type : String , required : true},
     profilePic : {type : String },
     coverPic : { type : String},
     createdAt : {type : Date , default : Date.now },
     updatedAt : { type : Date , default : Date.now}
});

export const User = mongoose.models.User || model("User", UserSchema);
