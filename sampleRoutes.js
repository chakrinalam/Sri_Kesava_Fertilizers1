const fs = require("fs");
const path = require("path");

const sampleRoutes = (res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(
    "<h1>Welcome to the Sample Page!</h1><p>This is a different route.</p>",
  );
};

// Export the router function so server.js can use it
module.exports = sampleRoutes;
