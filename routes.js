const publicRoutes = require("./publicRoutes");
const sampleRoutes = require("./sampleRoutes");
const printRoutes = require("./printRoutes");
const ureaRoutes = require("./ureaRoutes");

const handleRoutes = (req, res) => {
  const url = req.url;
  if (url === "/") {
    publicRoutes(res);
  } else if (url === "/sample") {
    sampleRoutes(res);
  } else if (url === "/print") {
    printRoutes(res);
  } else if (url === "/urea") {
    ureaRoutes(res);
  }
};

// Export the router function so server.js can use it
module.exports = handleRoutes;
