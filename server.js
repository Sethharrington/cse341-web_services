const express = require("express");
const app = express();
const cors = require("cors");
const professionalRouter = require("./src/routes/professionalsRouter");
const contactsRouter = require("./src/routes/contactsRouter");
const mongodb = require("./src/database/connect");
app.use(cors());

const port = process.env.PORT || 8080;

/* ***********************
 * Middleware
 * ************************/
// Express Messages Middleware

app.get("/", (req, res) => {
  res.send("Hello");
});

/* ***********************
 * Routes
 *************************/
app.use("/professional", professionalRouter);
app.use("/contacts", contactsRouter);

/* ***********************
 * Log statement to confirm server operation
 *************************/
mongodb.initDb((err, db) => {
  if (err) {
    console.error("Failed to connect to the database:", err);
  } else {
    app.listen(port, () => {
      console.log(
        "Web Server is listening at port " + (process.env.PORT || 8080)
      );
    });
  }
});
