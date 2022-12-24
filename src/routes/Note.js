const express = require('express');

const router = express.Router();

const Note = require('./../models/Note');

// Notes Route ( /notes )
router.post('/list', async function (req, res) {
    var notes = await Note.find({ userid: req.body.userid }); // find everything of type Note
    // res.send('This is the Notes Page');
    res.json(notes);
});

router.post('/add', async function (req, res) {

    await Note.deleteOne({ id: req.body.id });

    const newNote = new Note({
        id: req.body.id,
        userid: req.body.userid,
        title: req.body.title,
        content: req.body.content,
    });
    await newNote.save();

    const response = { message: "New Note Created for " + `id: ${req.body.userid}` };
    res.json(response);

    res.json(req.body);
});

router.post('/delete', async function (req, res) {
    await Note.deleteOne({ id: req.body.id });

    const response = { message: "note deleted" };
    res.json(response);
});

module.exports = router;