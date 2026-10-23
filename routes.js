const fs = require("fs");
const path = require("path");

const publicRoutes = (res) => {
  const filePath = path.join(__dirname, "public", "index.html");

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error loading index.html");
      return;
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(content);
  });
};

const sampleRoutes = (res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(
    "<h1>Welcome to the Sample Page!</h1><p>This is a different route.</p>",
  );
};

const handleRoutes = (req, res) => {
  const url = req.url;

  if (url === "/") {
    publicRoutes(res);
  } else if (url === "/sample") {
    sampleRoutes(res);
  }
};

// Export the router function so server.js can use it
module.exports = handleRoutes;
