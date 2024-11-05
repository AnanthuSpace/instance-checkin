const mongoose = require('mongoose');
const host = process.env.DATABASE_URL
const dbconnect = mongoose.connect(host)

dbconnect
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log(err.message))