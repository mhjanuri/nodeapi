const express = require('express');
const app = express();
const morgan = require('morgan')

// Post routes 
const postRoutes = require('./routes/post')

// Middleware
app.use(morgan('dev'))

app.use("/", postRoutes);

const port = 2020; 
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});