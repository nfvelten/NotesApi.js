const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
require ('dotenv').config()


mongoose
  .connect(
    "mongodb+srv://nicholas:<password>@cluster0.ejoz0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      userNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => console.log("connection complete"))
  .catch((err) => console.log(err));
