const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001
const cors = require('cors');
const db = require('./config/connection');
const routes = require('./routes');

app.use(express.urlencoded({extended: true, limit: '50mb'}));
app.use(express.json());
app.use(cors());

app.use('/', routes)

db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}!`);
    });
});