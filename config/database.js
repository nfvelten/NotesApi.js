const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "mortadela1",
  databases: "ever",
});

client.connect()

client.query("select * from ever_table", (err,result) => {
 
})

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost/javascriptNote", {
    userNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("connection complete"))
  .catch((err) => console.log(err));
