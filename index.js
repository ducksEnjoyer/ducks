const express = require("express")
const app = express();

app.get("/", (req, res) => {
  res.send("la baguette bien chaude du boulanger miam miam")
})
app.get("/first", (req, res) => {
  res.send("la bonnnnnne baguette")
})
app.get("/second", (req, res) => {
  res.send("la bonnnnnne baguette")
})
app.get("/third", (req, res) => {
  res.send("la bonnnnnne baguette")
})
app.get("/first/firstoffirst", (req, res) => {
  res.send("la bonnnnnne baguette")
})
app.listen(3000, () => {
  console.log("test");
})

// const express = require("express");
// const app = express();

// app.get("/", (request, response) => {
//   response.send("Hi there");
// });

// app.listen(3000, () => {
//   console.log("Listen on the port 3000...");
// });