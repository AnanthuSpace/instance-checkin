const express = require('express');
require('dotenv').config();
const cors = require('cors'); 
const instanceRouter = require("./router/instanceRouter");
require('./connection/dbConnection')

const port = process.env.PORT;
const app = express();

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());

app.use("/", instanceRouter);

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
