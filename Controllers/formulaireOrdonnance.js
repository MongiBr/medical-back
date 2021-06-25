
const ord =require('../Models/FormulaireOrdonnance')
module.exports={


    
    //** AJOUT D'UNE NOTIFICATION **/
    AjouterOrdonnance: function(req,res) {
        const ord1 = new ord(
            {
                contenu:req.body.contenu,
                expediteur:req.body.expediteur,
                
            }
        )
  
        ord1.save(function(err){
            if(err){
                res.json({state : 'erreuuur', msg :'error'+err})
                console.log('erreur' +err);
            
            }else{
                res.json({state:'ok',msg:'La Formulaire est Remplie'})
            }
        }
        )
    },


    //** AFFICHAGE D'UNE NOTIFICATION **/
    afficherOrdonnance: (req,res) =>{
        ord.find({},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },

   
    //** SUPPRESSION D'UNE NOTIFICATION **/
    supprimerOrdonnance: (req,res)=>{
        ord.findOneAndRemove({_id:req.params.id},(err,list)=>{
          if(err){
              res.json({state : 'no', msg :'error'+err})
          }else{
            res.json({state : 'ok',msg:'done'}) 
          }
        }
        )  
    },


    //** MISE A JOUR D'UNE NOTIFICATION**/
    UpdateOrdonnance: function(req,res){
        ord.updateOne(
            {
                _id : req.params.id
            },{
                $set : req.body
            },
            {   
                contenu:req.body.contenu,
                expediteur:req.body.expediteur,
                approuved:req.body.approuved
            },
            function(err,list){
                if (err){
                    res.json({state : 'no', msg :'error'+err})
                }else{
                    res.json({state : 'ok',msg:'done'}) 
                }
            }
        )
    } 
 }