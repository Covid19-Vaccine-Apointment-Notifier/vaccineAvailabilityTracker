// require('dotenv').config({path: __dirname + '/.env'})
const express = require("express");
import path from "path";
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, "../public"); //"../public" for prod  && '../../src/client' for dev
const HTML_FILE = path.join(DIST_DIR, "index.html");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
app.use(express.static(DIST_DIR));
const cors = require("cors");
const MONGO_URL = 
//  'mongodb://mahesh:qwerty123@localhost/manthebay' //prod uri
'mongodb://localhost/vacAvailTracker';
app.use(express.urlencoded({
    extended: true
  }))
// passport setup

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());
app.use(cors());
// import schema from "./graphql/rootSchema";
// const server = new ApolloServer({
//   schema,
//   context: async ({ req }) => {
//     let token = req.headers.authorization;
//     if (!token && req.headers.cookie && req.headers.cookie.includes("token")) {
//       token = req.headers.cookie.substring(6);
//     }
//     const user = await fetchUserFromToken(token);
//     // add the user to the context
//     return { user };
//   },
// });

// server.applyMiddleware({ app });

// mongoDb connection setup
mongoose
  .connect(MONGO_URL, { useNewUrlParser: true })
  .then(() => console.log(`Database connected at ${MONGO_URL}`))
  .catch((err) => console.log(`Database connection error: ${err.message}`));


app.get("*", (req, res) => {
  res.status(200).sendFile(HTML_FILE);
});


app.listen(port, function () {
  console.log("App listening on port: " + port);
});
