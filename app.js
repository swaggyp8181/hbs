var express = require('express');
var app = express();
var path = require('path')
var port = 3000


//Express configuration ==============================================================================================================================================================
app.use(express.static(path.join(__dirname, 'public')));

//View engine configuration =========================================================================================================================================================
var exphbs  = require('express-handlebars');
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');



//
app.get('/', function(req, res) {
	res.redirect('home', {"bool": true})
})

app.get('/home', function(req, res) {
	res.render('index')
})

//====================================================================================================================================================================================
app.listen(port, function(){
  console.log('Express started. Listening on %s', port);
});


module.exports = app;