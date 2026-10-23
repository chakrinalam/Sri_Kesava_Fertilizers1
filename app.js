const http = require("http");
const handleRoutes = require("./routes"); // Import your custom routes module

// Pass the modular route handler to the server creation logic
const server = http.createServer(handleRoutes);

const PORT = 3000;

server.listen(PORT, "localhost", () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
