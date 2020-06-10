const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("Test node api v2")
});

const port = 2020; 
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});