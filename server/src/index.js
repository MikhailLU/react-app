import express from "express";
import path from "path";

const app = express();

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(9000, () => console.log("Server starts on 9000"));