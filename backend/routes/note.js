const express = require("express");
const router = express.Router();

let Note = require("../models/note.model");

router.route("/").get((req, res) => {
  Note.find()
    .then(notes => res.json(notes))
    .catch(err => res.status(400).json("Error: " + err + "."));
});

router.route("/add").post((req, res) => {
  const title = req.body.title;
  const text = req.body.text;

  const newNote = new Note({
    title,
    text,
  });

  newNote.save()
    .then(() => res.json("Note added!"))
    .catch(err => res.status(400).json("Error: " + err + "."));
});

router.route("/:id").get((req, res) => {
  Note.findById(req.params.id)
    .then(note => res.json(note))
    .catch(err => res.status(400).json("Error: " + err + "."));
});

router.route("/:id").delete((req, res) => {
  Note.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise Deleted!"))
    .catch(err => res.status(400).json("Error: " + err + "."));
});

router.route("/update/:id").post((req, res) => {
  Note.findById(req.params.id)
    .then(note => {
      note.title = req.body.title;
      note.text = req.body.text;

      note.save()
        .then(() => res.json("Exercise Updated!"))
        .catch(err => res.status(400).json("Error: " + err + "."));
    })
    .catch(err => res.status(400).json("Error: " + err + "."));
});

module.exports = router;