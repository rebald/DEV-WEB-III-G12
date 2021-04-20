var express = require('express');
var router = express.Router();
var request = require("request");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET */

router.get('/test', function(req,res,next){
  console.log('API test');
  res.locals.connection.query('SELECT * FROM codepostal', function(error, results, fields) {
    if (error!=null) {
      res.redirect(529, '/error');
      console.log("erreur querry");
    }
    else {
      res.send({"status": 200, "error": null, "response": results});
      console.log("query OK");
    }
  });
});

/* BUG À CORRIGER

router.get('/utilisateur', function(req,res,next){
  console.log('API get utilisateur');

  let  idUtilsteur = req.query.userId;
  let mailUtilisateur = req.query.mail;

  if (idUtilisateur !== undefined) {
    console.log('GET utilisateur by id ' + idUtilsteur);
    res.locals.connection.query('SELECT * FROM utilisateurs WHERE idUtilisateur=?', [idUtilsteur], function (error, results, fields) {
      if (error != null) {
        res.redirect(529, '/error');
        console.log("erreur query");
      }
      else {
        res.send({"status": 200, "error": null, "response": results});
        console.log("query OK");
      }
    });
  } else if (mailUtilisateur !== undefined) {
    console.log('GET utilisateur by mail' + mailUtilisateur);
    res.locals.connection.query('SELECT * FROM utilisateurs WHERE mailUtilisateur=?', [mailUtilisateur], function (error, results, fields) {
      if (error != null) {
        res.redirect(529, '/error');
        console.log("erreur query");
      }
      else {
        res.send({"status": 200, "error": null, "response": results});
        console.log("query OK");
      }
    });
  } else {
    res.locals.connection.query('SELECT * FROM utilisateurs', function(error, results, fields) {
    if (error!=null) {
      res.redirect(529, '/error');
      console.log("erreur querry");
    }
    else {
      res.send({"status": 200, "error": null, "response": results});
      console.log("query OK");
    }
  });
}});
*/

router.get('/utilisateur', function(req,res,next){
  console.log('API get utilisateur');
  res.locals.connection.query('SELECT * FROM utilisateurs', function(error, results, fields) {
  if (error!=null) {
    res.redirect(529, '/error');
    console.log("erreur querry");
  }
  else {
    res.send({"status": 200, "error": null, "response": results});
    console.log("query OK");
  }});
});

router.get('/categorie', function(req,res,next){
  console.log('API get categorie');
  res.locals.connection.query('SELECT * FROM categories', function(error, results, fields) {
    if (error!=null) {
      res.redirect(529, '/error');
      console.log("erreur querry");
    }
    else {
      res.send({"status": 200, "error": null, "response": results});
      console.log("query OK");
    }});
});

router.get('/image', function(req,res,next){
  console.log('API get image');
  res.locals.connection.query('SELECT * FROM photo', function(error, results, fields) {
    if (error!=null) {
      res.redirect(529, '/error');
      console.log("erreur querry");
    }
    else {
      res.send({"status": 200, "error": null, "response": results});
      console.log("query OK");
    }});
});

/* POST */

router.post('/inscription', function (req, res, next) {
  console.log(req.body);
  console.log('POST inscription');
  res.locals.connection.query('INSERT INTO utilisateurs (nomUtilisateur, prenomUtilisateur, mailUtilisateur, mdpUtilisateur) VALUES (?, ?, ?, ?)',[req.body.formInscriptionNom, req.body.formInscriptionPrenom, req.body.formInscriptionMail, req.body.formInscriptionMdp], function (error, results, fields) {
    if (error!=null) {
      res.redirect(529, '/error');
      console.log(error);

    }
    else {
      console.log("utilisateur ajouté");
      res.send({"status":201, "error": null, "response":results});
    }
  });
});

router.post('/image', function (req, res, next) {
  console.log(req.body);
  console.log('POST image');
  res.locals.connection.query('INSERT INTO photo (idUtilisateur, image, idCategorie) VALUES (?, ?, ?)',[req.body.formImageUserId, req.body.formImagePhoto, req.body.formImageCategorieId], function (error, results, fields) {
    if (error!=null) {
      res.redirect(529, '/error');
      console.log(error);

    }
    else {
      console.log("image ajoutée");
      res.send({"status":201, "error": null, "response":results});
    }
  });
});

router.post('/categorie', function (req, res, next) {
  console.log(req.body);
  console.log('POST categorie');
  res.locals.connection.query('INSERT INTO categories (nomCategorie) VALUES (?)',[req.body.formCategorieNom], function (error, results, fields) {
    if (error!=null) {
      res.redirect(529, '/error');
      console.log(error);

    }
    else {
      console.log("categorie ajoutée");
      res.send({"status":201, "error": null, "response":results});
    }
  });
});

module.exports = router;

