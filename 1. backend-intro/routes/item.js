// y file sare item specific routs ko store ksrega.


const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  // res.send("got a GET request");
  // res.sendFile(__dirname + '/dummy.html');
  res.sendFile('../dummy.html', { root: __dirname + '/../' });
});

router.post('/items', (req,res) => {
  // res.send("got a POST request");
  res.json({x:1, y:2,  });
})

router.put('/items/:id', (req,res) => {
  res.send("got a PUT request");
})

router.delete('/items/:id', (req,res) => {
  res.send("got a DELETE request");
})

module.exports = router
