const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const {user_model} = require("./db/users");
require("./db/config");
require("./db/users");
const app = express();
app.use(express.json());
app.use(cors());
app.post("/registration", async(req, res) => {
    console.log(req.body);
    const user = user_model(req.body);
    const result = await user.save();
    res.send(result);
});
app.get("/", (req, res) => {
    res.send("backend is working");
});
app.listen(5501,()=> {
    console.log("server is running");
});    

