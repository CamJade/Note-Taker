//require file system to read files/store and retrieve notes
const fs = require('fs');

//let this file see other route
const htmlRoute = require('./htmlRoutes');

//commonJS syntax to import uuid --universally unique identifier
const { v4: uuidv4 } = require('uuid');

const router = require('express').Router();

//need to retrieve notes
router.get('/', (req, res) => {
    fs.readFile('./db/db.json', (err, data)=> {
        if (err) throw err;
        res.json(JSON.parse(data));
    })
});

//post notes -- need error if empty and template
router.post('/', (req, res) => {
    const {title, text} = req.body;
    const currentNote = {
        title,
        text,
        id: uuidv4() //unique id
    };
    fs.promises.readFile('./db/db.json')
        .then(data => {
            const note = JSON.parse(data);
            note.push(currentNote);
            return fs.promises.writeFile('./db/db.json', JSON.stringify(note));
        });

})