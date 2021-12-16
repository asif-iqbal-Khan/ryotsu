const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  try {
    const dataJson = fs.readFileSync("notes.json").toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

const addNotes = (title, body) => {
  const notes = getNotes();
  const duplicateNote = notes.find((note) => note.title === title);
  if (!duplicateNote) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log(chalk.inverse.green("New Note Added"));
  } else {
    console.log(chalk.inverse.red("Note Already Exist"));
  }
};

const removeNotes = (title) => {
  const notes = getNotes();
  const noteIndex = notes.findIndex((o) => o.title === title);
  notes.splice(noteIndex, 1);
  if (noteIndex != -1) {
    saveNotes(notes);
    console.log(chalk.inverse.green("Note Removed"));
  } else console.log(chalk.inverse.red("No Such Note Exist"));
};

const saveNotes = (notes) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

const listNotes = () => {
  const notes = getNotes();
  if (notes.length > 0) {
    console.log(chalk.inverse.green("Your Notes!"));
    notes.forEach((note) => {
      console.log(chalk.bold.underline(note.title));
    });
  } else {
    console.log(chalk.inverse.red("No Note Found!"));
  }
};

const readNotes = (title) => {
  const notes = getNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log("Title: " + chalk.bold.underline(title));
    console.log("Body: " + chalk.italic(note.body));
  } else console.log(chalk.inverse.red("No Such Note Found"));
};

module.exports = {
  addNotes,
  removeNotes,
  listNotes,
  readNotes,
};
