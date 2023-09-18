
const Note=require('../models/note')

const fetchNotes=async (req,res)=>{
    // Find the notes
    const note = await Note.find();
    //Respond
    res.json({note:note})
};

const fetchNote=async (req,res)=>{
    //Get the ID
    const noteId=req.params.id;

    //find the note id
    const note=await Note.findById(noteId)

    //Respond
    res.json({note:note})
}

const createNote=async (req,res)=>{
    // Get the data
    const {title, body}=req.body;
    
    //create my
    const note = await Note.create({
        title: title,
        body:body,
    })

    //respond
    res.json({note:note})
}

const updateNote=async (req,res)=>{
    //get ID
    const noteId=req.params.id;

    //get the data of the ID
    const {title, body}=req.body;


    //Update the record
    await Note.findByIdAndUpdate(noteId,{
        title:title,
        body: body,
    });

    //find the update
    const note=await Note.findById(noteId);
    
    //Respond
    res.json({note:note});
}

const deleteNote=async (req,res)=>{
    //get id
    const noteId=req.params.id;

    //delete the record
    await Note.findByIdAndDelete(noteId)

    //respond
    res.json('Deleted')
}

module.exports={
    fetchNote: fetchNote,
    fetchNotes:fetchNotes,
    createNote:createNote,
    updateNote:updateNote,
    deleteNote:deleteNote
}