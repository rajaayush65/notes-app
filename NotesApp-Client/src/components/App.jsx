import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import api from "../api";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    api
      .getAllNotes()
      .then((res) => setNotes(res.data.data))
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <Header />
      <CreateArea onUpdate={api.getAllNotes} />
      {notes.map((note) => {
        return (
          <Note
            key={note._id}
            id={note._id}
            title={note.title}
            content={note.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
