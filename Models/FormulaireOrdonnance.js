// expediteur , contenu , approuved (default : false)

// idannonce , id abonné 

const mongoose =require('mongoose');

const FormulaireOrdonnance = mongoose.model('FormulaireOrdonnance',new mongoose.Schema(

{
   
    expediteur : {
        type:String,
        required:true,
        trim:true

    },

    contenu:  {
        type:String,
        required:true,
        trim:true
    },

    approuved: {
        type:Boolean,
        default:false
    },

   

}))

module.exports=FormulaireOrdonnance