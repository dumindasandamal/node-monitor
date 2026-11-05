const express = require("express");
const os = require("os");

const app = express();

app.get("/", (req, res) => {
    res.send(`
        <h1>Node.js DevOps Monitor</h1>
        <h2>Server Information</h2>
        <p>Hostname: ${os.hostname()}</p>
        <p>Platform: ${os.platform()}</p>
        <p>Architecture: ${os.arch()}</p>
        <p>Uptime: ${Math.floor(os.uptime())} seconds</p>
        <p>Node Version: ${process.version}</p>
        <p>Application Status: Running</p>
    `);
});

app.get("/health", (req, res) => {
    res.json({
        status: "healthy",
        application: "Node.js Monitor"
    });
});

const PORT = 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
