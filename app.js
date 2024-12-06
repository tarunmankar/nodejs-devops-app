const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World! Welcome to DevOps Deployment!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
