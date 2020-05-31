const express = require('express');
const app =  express();
const cors = require('cors');

const port = 8008;

app.use(cors());
app.use(express.json());


app.listen(port, () => {
    console.log(`starting | port is ${port}`);
});