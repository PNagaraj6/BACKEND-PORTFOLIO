const express = require("express");
const cors= require("cors")
const connectDB = require("./config/db");

const allroutes = require("./routes/allsectionroutes")


const app = express();
app.use(express.json());

connectDB();

// app.get("/", (req, res) => {
//   res.send("Backend running");
// }); 
// app.get("/user", (req, res) => {
//   res.send("Users Data");
// });

app.use("/api",allroutes)
app.listen(process.env.PORT, () => {
  console.log("Server running on port",process.env.PORT);
});