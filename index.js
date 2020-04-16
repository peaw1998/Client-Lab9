let express = require("express");
let app = express();

app.get("/", (req, res) => {
  console.log("Hello World");
  res.send("Pimwipa Sakulkham 5935512010");
});

app.get("/crash", (req, res) => {
  console.log("Crash!!");
  res.send("Crash!!");
  process.exit(1);
});
app.listen(process.env.PORT, () =>
  console.log("Sever is Running at", process.env.PORT)
);
