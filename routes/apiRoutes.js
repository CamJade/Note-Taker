//commonJS syntax to import uuid --universally unique identifier
const { v4: uuidv4 } = require('uuid');

//save path in variable to use easily
const dataPath = require("../db/db.json");

//create module.exports so other files can see
module.exports = (app) => {

    //`GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
    app.get("/api/notes", (req, res) => 
        res.json(dataPath));

    //`POST /api/notes` should receive a new note to save on the request body  
    
    app.post("/api/notes", (req, res) => {
        req.body["id"] = {v4: uuidv4()}; //get unique id from uuid
        dataPath.push(req.body) //add it to the `db.json` file
        res.json(true); //return the new note to the client
    })

    //To delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
    app.get("/api/notes/:id", (req, res) => {
        const id = (value) => 
        value.id === req.params.id;
        dataPath.findIndex(id);
        res.json(dataPath);
    })
    //`DELETE /api/notes/:id` should receive a query parameter that contains the id of a note to delete
    app.delete("/api/notes/:id", (req, res) => {
        const id = (value) => 
        value.id === req.params.id;
        dataPath.splice(dataPath.findIndex(id), 1);
        res.json(dataPath);
    })

};

// //need to retrieve notes
// router.get('/', (req, res) => {
//     fs.readFile('./db/db.json', (err, data)=> {
//         if (err) throw err;
//         res.json(JSON.parse(data));
//     })
// });

// //post notes -- need error if empty and template
// router.post('/', (req, res) => {
//     const {title, text} = req.body;
//     const currentNote = {
//         title,
//         text,
//         id: uuidv4() //unique id
//     };
//     fs.promises.readFile('./db/db.json')
//         .then(data => {
//             const note = JSON.parse(data);
//             note.push(currentNote);
//             return fs.promises.writeFile('./db/db.json', JSON.stringify(note));
//         });

// })
