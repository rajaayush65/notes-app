import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import api from "../api";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={(event) => {
          event.preventDefault();
          if (
            window.confirm(
              `Do You Want To Delete The Movie ${props.title} permanently?`
            )
          ) {
            api.deleteNoteById(props.id);
          }
        }}
      >
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
