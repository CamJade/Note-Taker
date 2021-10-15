// //require modules
// const express = require('express'); //express npm package

// //set express as variable to use easily later in code
// const app = express();
const path = require('path');


// //set express method to easily usable variable
// const app = express();
//create module.exports so other files can see
module.exports = (app) => {

    // `GET /notes` should return the `notes.html` file.
    app.get("/notes", (req, res) => 
        res.sendFile(path.join(__dirname, "../public/notes.html")));

    //`GET *` should return the `index.html` file.
    app.get("*", (req, res) => 
        res.sendFile(path.join(__dirname, "../public/index.html")));

};