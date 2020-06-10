const express = require('express');
const app = express();
const morgan = require('morgan')

// Post routes 
const {getPosts} = require('./routes/post')

app.get("/", getPosts);

const port = 2020; 
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});