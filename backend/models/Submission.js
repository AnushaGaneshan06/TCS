const mongoose = require("mongoose");

const SubmissionSchema = new mongoose.Schema({
    student: String,
    repo: String,
    submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Submission", SubmissionSchema);
