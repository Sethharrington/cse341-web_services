const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "My API",
    description: "Description",
  },
  // host: "https://cse341-web-services-1qxq.onrender.com",
  host: "localhost:8080", // Use localhost for local development
  schemes: ["http", "https"], // Use both https and http for production
};

const outputFile = "./swagger.json";
const routes = ["./src/routes/index.js"];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);
