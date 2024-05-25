const express = require("express");
const app = express();

require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const cors = require("cors");
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

const userRoute = require("./routes/usersRoute");
const propertyRoute = require('./routes/propertiesRoute')

app.use("/api/users", userRoute);
app.use("/api/property",propertyRoute);

const port = process.env.PORT || 5000;

const path = require("path");
__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  //*Set static folder up in production
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

app.listen(port, () => {
  console.log(`Node JS Server is running on port ${port}`);
});
