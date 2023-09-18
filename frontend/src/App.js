import { useEffect, useState } from "react"
import axios from "axios"

function App() {
    const [notes, setNotes]=useState(null);

    useEffect(()=>{
        fetchNotes();
    },[])

    const fetchNotes=async()=>{
        //fetch the notes
        const res=await axios.get("http://localhost:3000/notes");

        //set note
        setNotes(res.data.notes);

        // //Respond
        console.log(res)
    }

  return (
    <div>
        <h2> My Notes</h2>
        {notes && notes.map(note=>{
            return (<div>
                <h3>{note.title}</h3>
            </div>
            );
        })}
    </div>
  )
}

export default App