const express = require('express');
const app = express();
const port = 3000;

// import item ki router file
const item = require('./routes/item');
const birds = require('./routes/birds.js');
const blog = require('./routes/blog.js');
// load into application
app.use('/api', item);
app.use('/filler', birds);
app.use('/blogger', blog);

// ab yha pe item ki sari routes available ho gyi hain

// -> /api/ -> item home page
// -> /api/items -> item post request
// -> /api/items/:id -> item put request
// -> /api/items/:id -> item delete request


app.listen(port, () => {
  console.log(`Priyanshu app on port ${port}`);

  })