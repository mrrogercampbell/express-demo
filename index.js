const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const app = express();
const appRoutes = require('./routes/appRoutes')



const PORT = 8080
const HOST = 'http://localhost:'
const ServerCallBack = () => console.log(`${HOST}${PORT}`)


app.use(cors());
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.use('/', appRoutes)

app.listen(PORT, ServerCallBack)