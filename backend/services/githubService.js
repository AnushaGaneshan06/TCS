const axios = require("axios");
require("dotenv").config();

async function fetchRepoFiles(owner, repo) {
    const url = `https://api.github.com/repos/${owner}/${repo}/contents`;
    const res = await axios.get(url, {
        headers: { Authorization: `token ${process.env.GITHUB_TOKEN}` }
    });
    return res.data;
}

async function fetchFileContent(downloadUrl) {
    const res = await axios.get(downloadUrl);
    return res.data;
}

module.exports = { fetchRepoFiles, fetchFileContent };
