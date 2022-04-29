const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

const port = process.env.PORT || 4444;

app.listen(port, () => console.log(`Listening on port, ${port}`));
