import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import api from "../api";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [check, setChecked] = useState(false);

  async function handleChange(event) {
    const { name, value } = event.target;
    if (name === "content") {
      setChecked(true);
    }
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }


  async function addNote(event) {
    await api
      .insertNote(note)
      .then(() => {
        window.alert("Note Added Successfully");
        setNote({
          title: "",
          content: "",
        });
        props.onUpdate();
      })
      .catch((err) => {
        console.log(err);
      });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {check && (
          <input
            onChange={handleChange}
            value={note.title}
            name="title"
            placeholder="Title"
          />
        )}
        <textarea
          onChange={handleChange}
          onClick={() => {
            setChecked(true);
          }}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows={check ? "3" : "1"}
        />
        <Zoom in={check}>
          <Fab onClick={addNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
