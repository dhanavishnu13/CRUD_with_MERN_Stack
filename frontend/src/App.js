import { useEffect, useState } from "react"
import axios from "axios"

function App() {
    const [notes, setNotes] = useState(null)
  const [createForm, setCreateForm] = useState({
    title: "",
    body: ""
  });
  const [updateForm, setUpdateForm] = useState({
    _id: null,
    title: "",
    body: ""
  })

  useEffect(()=>{
    fetchNotes();
  },[])

  const fetchNotes = async () => {
    const res = await axios.get("http://localhost:3000/notes")
    setNotes(res.data.notes)
  }

  const updateCreateFormField = (e) => {
    const {name, value} = e.target
    setCreateForm({
      ...createForm,
      [name]: value,
    })
  }

  const createNote = async (e) => {
    e.preventDefault()
    const res = await axios.post('http://localhost:3000/notes',createForm)
    setNotes([...notes,res.data.note])
    setCreateForm({title:"",body:""})
  }

  
  return (
    <div>
        <div>
            <h2> My Notes</h2>
            {notes && notes.map(note=>{
            return (<div key={note._id}>
                <h3>{note.title}</h3>
                <p>{note.body}</p>
            </div>
            );
        })}
        </div>

        <div>
            <h2>Creaate Note</h2>
            <form onSubmit={createNote}>
                <input value={createForm.title} onChange={updateCreateFormField} name="Title"/>
                <textarea value={createForm.body} onChange={updateCreateFormField} name="Body"/>
                <button type="submit">Submit</button>
            </form>
        </div>
        
    </div>
  )
}

export default App