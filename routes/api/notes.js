const notes = require('express').Router();
let db = require("../../db/db.json")
const { readFromFile, readAndAppend } = require('../../helpers/fsUtils');
const uuid = require('../../helpers/uuid');

// GET Route for retrieving all the notes
notes.get('/api/notes', (req, res) => {
fs.readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new note
notes.post('/api/notes', (req, res) => {
  console.log(req.body);
});

  const { title, text } = req.body;

  if (req.body) {
    const newNote= {
      title,
      text,
      note_id: uuid(),
    };
   

    readAndAppend(newNote, './db/notes.json');
    res.json(`Note added successfully`);
  } else {
    res.error('Error in adding note');
  }

  // DELETE Route for deleting note
notes.delete('/api/notes/:id', (req, res) => {
  let db = JSON.parse(fs.readFileSync('db/db.json'))
  
  let delNotes = db.filter(item => item.id !== req.params.id);
  // Rewriting note to db.json
  fs.writeFileSync('db/db.json', JSON.stringify(delNotes));
  res.json(delNotes);

  }
  );

module.exports = notes;
