const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const professionalRouter = require("./src/routes/professionalsRouter");
const contactsRouter = require("./src/routes/contactsRouter");
const mongodb = require("./src/database/connect");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const port = process.env.PORT || 8080;

/* ***********************
 * Middleware
 * ************************/
// Express Messages Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/* ***********************
 * Routes
 *************************/
app.get("/", (req, res) => {
  res.send("Hello");
});
app.use("/professional", professionalRouter);
app.use("/contacts", contactsRouter);

/* ***********************
 * Log statement to confirm server operation
 *************************/
mongodb.initDb((err) => {
  if (err) {
    console.error("Failed to connect to the database:", err);
  } else {
    app.listen(port, () => {
      console.log(
        "Web Server is listening at port " + (process.env.PORT || 8080),
      );
    });
  }
});
