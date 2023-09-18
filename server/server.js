if (process.env.NODE_ENV!='production'){
    require('dotenv').config();
}
const express = require('express');
const cors=require('cors')
const connectToDB=require('./config/connectToDB')

const noteController= require("./controllers/notesController")

const app=express()

//configure express
app.use(express.json())
app.use(cors());

connectToDB();

//Routing
app.get('/notes', noteController.fetchNotes)

app.get('/notes/:id', noteController.fetchNote)

app.post('/notes', noteController.createNote)

app.put('/notes/:id', noteController.updateNote)

app.delete('/notes/:id', noteController.deleteNote)

app.listen(process.env.PORT);