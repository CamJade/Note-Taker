//require modules
const express = require('express'); //express npm package
const path = require('path'); // Node.js native utility module

//set express as variable to use easily later in code
const app = express();
//set up server on port 3001
const PORT = process.env.port || 3001;

//import routers and set to variables
const routes = require('./routes/apiRoutes');
const routes2 = require('./routes/htmlRoutes');

//Middleware used for parsing JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));  //static file in public folder

//use router
app.use('/api', routes);
app.use('/', routes2);

//route to GET home(index)
app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);
//route to GET notes
app.get('/notes', (req,res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//open app to listen on port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);