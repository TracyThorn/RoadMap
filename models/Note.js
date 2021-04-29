const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Please add a title."]
  },
  text: {
    type: String,
    trim: true,
    required: [true, "Please add a note."]
  },
  created: {
    type: Date,
    default: Date.now
  }
});

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;