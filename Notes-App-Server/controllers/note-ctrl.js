const Note = require("../models/note-model");

createNote = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You Must Provide a Note Name",
    });
  }

  const note = new Note(body);

  if (!note) {
    return res.status(400).json({
      success: false,
      error: err,
    });
  }

  note
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: note._id,
        message: "Note created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Note not created!",
      });
    });
};

deleteNote = async (req, res) => {
  await Note.findOneAndDelete({ _id: req.params.id }, (err, note) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: err,
      });
    }
    if (!note) {
      return res.status(404).json({
        success: false,
        error: "Note Not Found",
      });
    }
    return res.status(200).json({
      success: true,
      data: note,
    });
  });
};

getNotes = async (req, res) => {
  await Note.find({}, (err, notes) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: err,
      });
    }
    if (!notes.length) {
      return res.status(404).json({
        success: false,
        error: "No Note Found",
      });
    }
    return res.status(200).json({
      success: true,
      data: notes,
    });
  }).catch((err) => {
    console.log(err);
  });
};

module.exports = {
  createNote,
  deleteNote,
  getNotes,
};
