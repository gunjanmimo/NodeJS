const express = require("express");
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true}
    ).then(() => console.log("DB Connected !"));
mongoose.connection.on("error", err => {
    console.log(`DB connection error: ${err.message}`);
});

//bring in routes
const postRoutes = require('./routes/post')
const bodyParser=require("body-parser");

//midlleware

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/", postRoutes);


const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`API running on port: ${port}`);
});

