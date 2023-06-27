// Require all necessary dependencies
const path = require('path');
const router = require('express').Router();
const express = require('express');

// Defines route handler for the get request
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// Defines route handlers for all other routes by using '*' to bring the index.html file
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;