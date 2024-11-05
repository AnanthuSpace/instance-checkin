const express = require('express');
require('dotenv').config()

const port = process.env.PORT
const app = express();

app.use(express.json())

app.use("/", ()=>console.log("first") )

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});