const mongoose= require('mongoose')

const movieSchema=mongoose.Schema({
    title:{
        type:String,
        requirement:true,
    },
    description:{
        type:String,
        requirement:true,
    },
    genre:{
        type:String,
        requirement:true,
    },
    release_year:{
        type:String,
        requirement:true,
    },
    reviews:{
        type:String,
        requirement:true,
    },
});

module.exports = mongoose.model("Movie", movieSchema);

