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

router.get('/utilisateur', function(req,res,next){
  console.log('API get utilisateur');

  let  id = req.query.idUtilisateur;
  let mail = req.query.mailUtilisateur;

  if (id !== undefined) {
    console.log('GET utilisateur by id ' + id);
    res.locals.connection.query('SELECT * FROM utilisateurs WHERE idUtilisateur=?', [id], function (error, results, fields) {
      if (error != null) {
        res.redirect(529, '/error');
        console.log("erreur query");
      }
      else {
        res.send({"status": 200, "error": null, "response": results});
        console.log("query OK");
      }
    });
  } else if (mail !== undefined) {
    console.log('GET utilisateur by mail' + mail);
    res.locals.connection.query('SELECT * FROM utilisateurs WHERE mailUtilisateur=?', [mail], function (error, results, fields) {
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

router.get('/image', function(req,res,next) {
  console.log('API get image');
  let idImg = req.query.idImg;
  let idUser = req.query.idUser;

  if (idImg !== undefined) {
    console.log('API get image by id de l\'image: ' + idImg);
    res.locals.connection.query('SELECT * FROM photo WHERE idPhoto=?', [idImg], function (error, results, fields) {
      if (error != null) {
        res.redirect(529, '/error');
        console.log("erreur querry");
      } else {
        res.send({"status": 200, "error": null, "response": results});
        console.log("query OK");
      }
    });
  } else if (idUser !== undefined) {
    console.log('API get image by id de l\'utilisateur: ' + idUser);
    res.locals.connection.query('SELECT * FROM photo WHERE idUtilisateur=?', [idUser], function (error, results, fields) {
      if (error != null) {
        res.redirect(529, '/error');
        console.log("erreur querry");
      } else {
        res.send({"status": 200, "error": null, "response": results});
        console.log("query OK");
      }
    });
  } else {
    res.locals.connection.query('SELECT * FROM photo', function(error, results, fields) {
    if (error!=null) {
      res.redirect(529, '/error');
      console.log("erreur querry");
    }
    else {
      res.send({"status": 200, "error": null, "response": results});
      console.log("query OK");
    }});
    }});

// test affichage api plus simple 127.0.0.1:3000/images/:idImg

 router.get('/images/:idmg', function(req,res,next) {
  console.log('API get image');
  let idImg = req.params.idImg

  if (idImg !== undefined) {
    console.log('API get image by id de l\'image: ' + idImg);
    res.locals.connection.query('SELECT * FROM photo WHERE idPhoto=?', [idImg], function (error, results, fields) {
      if (error != null) {
        res.redirect(529, '/error');
        console.log("erreur querry");
      } else {
        res.send({"status": 200, "error": null, "response": results});
        console.log("query OK");
      }
    });
  }});

router.get('/images', function(req,res,next) {
  console.log('API get image');
  res.locals.connection.query('SELECT * FROM photo', function (error, results, fields) {
    if (error != null) {
      res.redirect(529, '/error');
      console.log("erreur querry");
    } else {
      res.send({"status": 200, "error": null, "response": results});
      console.log("query OK");
    }
  });
});



// POST //

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

router.post('/categorie.ts', function (req, res, next) {
  console.log(req.body);
  console.log('POST categorie.ts');
  res.locals.connection.query('INSERT INTO categories (nomCategorie) VALUES (?)',[req.body.formCategorieNom], function (error, results, fields) {
    if (error!=null) {
      res.redirect(529, '/error');
      console.log(error);

    }
    else {
      console.log("categorie.ts ajoutée");
      res.send({"status":201, "error": null, "response":results});
    }
  });
});

module.exports = router;

// fs.readfile