// Requires all necessary dependencies
const util = require("util");
const fs = require("fs");
const uuid = require("uuid");
// Generates id's
const noteData = "db/db.json";
// Converts read and write file to be asynchronous
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// Creates a constructor class to asynchronously read, write, and store notes
class noteManage {
  async read() {
    try {
      return await readFileAsync(noteData, "utf8");
    } catch (error) {
      throw error;
    }
  }

  async write(note) {
    try {
      await writeFileAsync(noteData, JSON.stringify(note));
    } catch (error) {
      throw error;
    }
  }

  async getNotes() {
    try {
      const notes = await this.read();
      let parsed = [];

      if (Array.isArray(notes)) {
        parsed = notes;
      } else {
        try {
          parsed = JSON.parse(notes);
        } catch (err) {
          parsed = [];
        }
      }

      return parsed;
    } catch (error) {
      throw error;
    }
  }

  async addNote(note) {
    try {
      const { title, text } = note;
      let newNote = {
        id: uuid(),
        title,
        text,
      };

      const notes = await this.getNotes();
      const updatedNotes = [...notes, newNote];
      await this.write(updatedNotes);

      return newNote;
    } catch (error) {
      throw error;
    }
  }
}
// Exports the new instance of noteManage
module.exports = new noteManage();