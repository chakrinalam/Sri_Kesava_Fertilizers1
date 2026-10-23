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



// Export the router function so server.js can use it
module.exports = publicRoutes;
