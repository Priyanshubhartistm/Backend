// including express module and intializing the app

const express = require ("express");
const app = express();

// variable that stores the port number
const port = 3000;

app.get('./', (req, res) => {
    console.log("Hello World!")
});


//  start your app or server
app.listen(port, () => {
    console.log(`Server is running on`);
});
