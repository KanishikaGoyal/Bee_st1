const mongoose= require('mongoose')

const reviewSchema=mongoose.Schema({
    content:{
        type:String,
        requirement:true,
    },
    rating:{
        type:Number,
        requirement:true,
    },
    author:{
        type:String,
        requirement:true,
    },
    created_at:{
        type:String,
        requirement:true,
    },
    
});

module.exports = mongoose.model("Review", reviewSchema);

