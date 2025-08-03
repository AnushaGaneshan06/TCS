const express = require("express");
const router = express.Router();
const Submission = require("../models/Submission");
const { fetchRepoFiles, fetchFileContent } = require("../services/githubService");

// Save submission
router.post("/", async (req, res) => {
    try {
        const { student, repo } = req.body;
        const submission = new Submission({ student, repo });
        await submission.save();
        res.json({ message: "Submission saved!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all submissions
router.get("/", async (req, res) => {
    try {
        const submissions = await Submission.find();
        res.json(submissions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get files of a student's repo
router.get("/files", async (req, res) => {
    try {
        const { owner, repo } = req.query;
        const files = await fetchRepoFiles(owner, repo);
        res.json(files);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get file content
router.get("/file-content", async (req, res) => {
    try {
        const { url } = req.query;
        const content = await fetchFileContent(url);
        res.send(content);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
