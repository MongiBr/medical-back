const annonce = require('../Models/AnnonceModal')


module.exports={

    //** AJOUT D'UNE ANNONCE **/
    ajouterAnnonce: function(req,res){
        const annonce1 = new annonce(

            {  
                   
                Titre:req.body.Titre,
                Ville:req.body.Ville,
                Prix:req.body.Prix,
                Description:req.body.Description,
                Gouvernorat:req.body.Gouvernorat,
                Photo_annonce:req.body.annonce_picture,
                Date_Annonce:req.body.Date_Annonce,
                Etat1Anononce:req.body.Etat1Anononce,
                Etat2Anononce:req.body.Etat2Anononce,
                TypeAnnonce:req.body.TypeAnnonce, 
                Image:req.body.Image, 
                Tags:req.body.Tags,
                Produit:req.body.Produit,
                Catégorie:req.body.Catégorie,
                userId:req.body.userId,
                userName:req.body.userName,
                images:req.body.images
                
                
            }
        )
        annonce1.save(function(err){
            if(err){
                res.json({state : 'erreuuur', msg :'error'+err})
                console.log('erreur' +err);
            }
            else{
                res.json({state:'ok',msg:'annonce ajouter'})
            }
        })
    },
    
 
    //** AFFICHAGE D'UNE ANNONCE **/
    afficherAnnonce: (req,res) =>{
        annonce.find({},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },
    //** AFFICHAGE D'UNE ANNONCE A PARTIR DUN TITRE **/
    afficherAnnonceTiltle: (req,res) =>{
        annonce.findOne({title:req.body.title},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },
   
    //** SUPPRESSION D'UNE ANNONCE **/
    supprimerAnnonce: (req,res)=>{
        annonce.findOneAndRemove({_id:req.params.id},(err,list)=>{
          if(err){
              res.json({state : 'no', msg :'error'+err})
          }else{
            res.json({state : 'ok',msg:'done'}) 
          }
      })  
    },

    //** MISE A JOUR D'UNE ANNONCE **/
    UpdateAnnonce : function(req,res){
        annonce.updateOne(
            {
                _id : req.params.id
            },{
                $set : req.body
            },
            {  Titre:req.body.Titre,
                Ville:req.body.Ville,
                Prix:req.body.Prix,
                Description:req.body.Description,
                Gouvernorat:req.body.Gouvernorat,
                Photo_annonce:req.body.annonce_picture,
                Date_Annonce:req.body.Date_Annonce,
                Etat1Anononce:req.body.Etat1Anononce,
                Etat2Anononce:req.body.Etat2Anononce,
                TypeAnnonce:req.body.TypeAnnonce, 
                Image:req.body.Image, 
                Tags:req.body.Tags,
                Produit:req.body.Produit,
                Catégorie:req.body.Catégorie,
                userId:req.body.userId,
                userName:req.body.userName
                 
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