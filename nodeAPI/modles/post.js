const mongoose=require("mongoose");
const postSchemea= new mongoose.Schema({
    title:{
        type: String,
        required: "Title is rquired",
        minlength:4,
        maxlength:150,
    },
    body:{
        type: String,
        required: "Body is required",
        minlength: 4,
        maxlength: 2000,
    }
});

module.exports=mongoose.model("Post",postSchemea);