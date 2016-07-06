var express = require('express');

var router = express.Router();

router.get('/', function (request, response){
  //got to localhost:3000/cat to see the response
  response.send('Meowmix, Meowmix, please deliver');

});

//gets cat/dog as well as cat
router.get('/dog', function (request, response){
  response.send('meow/woof');
});

//exports it to different files
module.exports = router;
