const express = require('express');
const cors = require('cors');

const app = express();

const router = require('./src/routes/routes')

app.use(cors());
app.use(router);

app.listen(3000, () => {
    console.log("Listening on port 3000")
})