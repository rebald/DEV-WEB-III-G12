var express = require('express');
var mysql = require('mysql');


var app = express()
const hostname = '127.0.0.1';
const port = 3000;

/*
app.use(function(req, res, next) {
    res.locals.connection = mysql.createConnection({
        host     : '127.0.0.1',
        //host: 'localhost',
        user     : 'root',
        //user: 'DevWeb12',
        password : 'ProjetDevWeb-12',
        //password: 'Projetdevweb12',
        database: 'projetdevweb'
        //database : '',
		//port: 3306
    });
    res.locals.connection.connect(function(error) {
        if (error) {
            //res.render('error', {message:"Impossible de se connecter à la base de données"});
        } else {
            //res.locals.connection.connect();
            next();
        }
    });
});
*/

app.get('/', (req, res) => {
		//res.setHeader('Content-Type', 'text/html');
		res.send('<h1>Hello World!</h1>')
	}
);

/*
app.get('/:nom', (req, res) => {
		//res.setHeader('Content-Type', 'text/html');
		res.send('<h1>salut ' + req.params.nom +' </h1><h2> Comment vas-tu aujourd\'hui ?</h2>')
	}
)
*/

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


//Test de l'API retoure toutes les catégories
app.get('/test', function(req,res,next){
    console.log('API test');
    res.locals.connection.query('SELECT * FROM categorie', function(error, results, fields) {
        if (error!=null) {
            res.redirect(529, '/error');
            console.log("erreur query");
        }
        else {
            res.send({"status": 200, "error": null, "response": results});
            console.log("query OK");
        }
    });
});
