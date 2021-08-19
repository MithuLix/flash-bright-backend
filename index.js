const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
const port = 5000;

//mongodb database require functions
// const objectId = require('mongodb').objectId;
const MongoClient = require('mongodb').MongoClient;
const {objectId} = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.sckbv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true });

// db connection checking
app.get("/", function (req, res) {res.send("Flash-bright database connected");})

//DB connection between client-server
client.connect(err => {
    const Pictures = client.db("flashBright").collection("pictures");
})


app.listen(process.env.PORT || port)