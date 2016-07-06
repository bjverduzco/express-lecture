var express = require('express');

var app = express();

var catRouter = require('./cat');

var port = 3000;


//requests a response
app.get('/', function(request, response){
  //will show up on the acutal webpage(localhost:3000)
  response.send('Hello World!');
  //will show in terminal where the server is being run
  console.log('Received request.');
});

// //got to localhost:3000/cat to see the response
// app.get('/cat', function(request, response){
//   response.send('Meowmix, Meowmix, please deliver');
// });

//will send a file, __dirname is the path to the directory that we are currently in
//path.join joins the two types of paths
app.get('/', function(request, response){
  response.sendFile(path.join(__dirname, './index.html'));
});

//post request
app.post('/', function(request, response){
  response.sendStatus(200);
});

//brings in the cat page through a router and the cat.js file
app.use('/cat', catRouter);

app.use(express.static('public'));

// //the order of the get requests order matters. this one will not be run
// app.get('/', function(request, response){
//   response.send('Hello 2');
// });

//this is a catch all route with the '.*' make sure this type of catch all is at the end of the file
app.get('/*', function(request, response){
  response.send('Catch all');
});

//listens to port 3000
app.listen(port, function onServerListener(){
  console.log('Started express server on port ' + port + '\nPress ctrl-c to stop the server.');
});
