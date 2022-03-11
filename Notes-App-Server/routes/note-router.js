const express = require("express");

const NoteCtrl = require("../controllers/note-ctrl");

const router = express.Router();

router.post("/note", NoteCtrl.createNote);
router.delete("/note/:id", NoteCtrl.deleteNote);
router.get("/notes", NoteCtrl.getNotes);

module.exports = router;
