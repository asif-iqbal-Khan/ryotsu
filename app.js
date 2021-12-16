// const fs = require("fs");
const notes = require("./base.js");
const yargs = require("yargs");
const chalk = require("chalk");
// const { string } = require("yargs");

// fs.writeFileSync("note.xlsx", "Hey There! My name is Asif  Khan");
// fs.appendFileSync("note.txt", "I am Fine");
// fs.appendFileSync("note.txt", process.argv[2]);

yargs.command({
  command: "add",
  describe: "Add A Note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove A Note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNotes(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "List all the Notes",
  handler() {
    notes.listNotes();
  },
});
yargs.command({
  command: "read",
  describe: "Read the body of a Note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNotes(argv.title);
  },
});

// console.log(yargs.argv);
yargs.parse();

// console.log(chalk.inverse.green("Success!"));
// console.log(chalk.inverse.red("Error!"));
// console.log(chalk.hidden("world!"));
