const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001
const cors = require('cors');


app.use(express.urlencoded({extended: true, limit: '50mb'}));
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}!`);
});
