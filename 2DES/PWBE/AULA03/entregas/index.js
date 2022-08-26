const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

const dbcon = mysql.createConnection({
    user : 'root',
    local : 'localhost',
    database : 'entregas'
});

// app.get

app.listen(5000,() => {
    console.log("Respondendo na porta 5000");
});