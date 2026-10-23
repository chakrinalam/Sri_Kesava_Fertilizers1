const publicRoutes = require("./publicRoutes");
const sampleRoutes = require("./sampleRoutes");
const printRoutes = require("./printRoutes");

const handleRoutes = (req, res) => {
  const url = req.url;
  if (url === "/") {
    publicRoutes(res);
  } else if (url === "/sample") {
    sampleRoutes(res);
  } else if (url === "/print") {
    printRoutes(res);
  }
};

// Export the router function so server.js can use it
module.exports = handleRoutes;
