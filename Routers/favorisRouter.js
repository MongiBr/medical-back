const express= require('express');
const router=express.Router();
const fav = require('../Controllers/favouriteController');
//////////////////////////////////***********DONE********************************** */
//* AJOUTER ADRESSE*/
router.post('/ajouter',fav.ajouterFavoris);// ca marche 

//* AFFICHER ADRESSE*/
router.get('/afficher',fav.ajouterFavoris); //ca marche

//* SUPPRESSION ADRESSE */
router.delete('/supprimer/:id',fav.supprimerFavoris); // ca marche 


//* MISE A JOUR D'UNE ADRESSE */
router.put('/modifier/:id',fav.modifierFavoris);// ca marche 

module.exports= router ;
