const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.listen(3000, () => {
    console.log("Listening on port 3000")
})