// Require all necessary dependencies
const router = require("express").Router();
const noteManage = require("../routes/noteManage");

// Route handler for a get request for all notes and provides an error if one occurs
router.get("/notes", async (req, res) => {
  try {
    const notes = await noteManage.getNotes();
    res.json(notes);
  } catch (err) {
    res.status(400).json(err);
  }
});
// Route handler for a post request for all notes and provides an error if one occurs
router.post("/notes", async (req, res) => {
  try {
    const note = await noteManage.addNote(req.body);
    res.json(note);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
