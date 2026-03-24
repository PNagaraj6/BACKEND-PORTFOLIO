const express = require("express");
const cors= require("cors")
const connectDB = require("./config/db");

const allroutes = require("./routes/allsectionroutes")
const sequelize = require("./config/pg")
const User = require("./models/User")
const app = express();
app.use(express.json());

// async function connectDATA() {
//   try {
//     await sequelize.authenticate();
//     console.log("Database connected successfully ✅");
//   } catch (error) {
//     console.error("Error connecting to DB ❌", error);
//   }
// }

// connectDATA();
// async function main() {
//   try {
//     // connect + create tables
//     await sequelize.sync();
//     console.log("Tables created ✅");

//     // Insert data
//     await User.create({
//       name: "NAGA",
//       email: "naga@gmail.com",
//     });

//     // Fetch data
//     const users = await User.findAll();
//     console.log(users);

//   } catch (err) {
//     console.log(err);
//   }
// }

// main();
// connectDB();

// app.get("/", (req, res) => {
//   res.send("Backend running");
// }); 
// app.get("/user", (req, res) => {
//   res.send("Users Data");
// });

app.use("/api",allroutes)
app.use('/img', express.static("img"))
app.listen(process.env.PORT, () => {
  console.log("Server running on port",process.env.PORT);
});