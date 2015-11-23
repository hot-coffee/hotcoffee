// REQUIRE MODULES
var express = require('express');
var app = express();

//express static public files
app.use(express.static('public'));

//listen on PORT

app.listen(process.env.PORT || 3000);
console.log('Now listening on port...');

