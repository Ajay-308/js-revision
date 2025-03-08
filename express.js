const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route for GET request at the root URL
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// You can add more routes here
// Example: app.post('/data', (req, res) => { ... });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
