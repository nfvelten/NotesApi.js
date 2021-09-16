var cors = require("cors");
var express = require("express");
var path = require("path");
var logger = require("morgan");
var usersRouter = require("./app/routes/users");
var notesRouter = require("./app/routes/notes");
var app = express();

const allowedOrigins = ["http://localhost:3000"];

const options = (cors.CorsOptions = {
  origin: allowedOrigins,
});

require("./config/database");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors(options));
app.use("/users", usersRouter);
app.use("/notes", notesRouter);

module.exports = app;
