// idannonce , id abonné 

const mongoose =require('mongoose');
const FavouriteAnnonce = new mongoose.Schema({

   
    id_user: {
        type:String,
        required:true,
        trim:true

    },

    id_annonce:  {
        type:String,
        required:true,
        trim:true
    }
    
})
module.exports=FavouriteAnnonce;