var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};

// publicRoutes.js
var require_publicRoutes = __commonJS({
  "publicRoutes.js"(exports2, module2) {
    var fs = require("fs");
    var path = require("path");
    var publicRoutes = (res) => {
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
    module2.exports = publicRoutes;
  }
});

// sampleRoutes.js
var require_sampleRoutes = __commonJS({
  "sampleRoutes.js"(exports2, module2) {
    var fs = require("fs");
    var path = require("path");
    var sampleRoutes = (res) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(
        "<h1>Welcome to the Sample Page!</h1><p>This is a different route.</p>"
      );
    };
    module2.exports = sampleRoutes;
  }
});

// printRoutes.js
var require_printRoutes = __commonJS({
  "printRoutes.js"(exports2, module2) {
    var { execSync } = require("child_process");
    var printRoutes = () => {
      try {
        for (let index = 0; index < 3; index++) {
          const output = execSync(
            "copy /b test2.prn \\\\Chakri_Lenovo\\Godex"
          ).toString();
          console.log(output);
        }
      } catch (error) {
        console.error(`Error executing command: ${error.message}`);
      }
    };
    module2.exports = printRoutes;
  }
});

// routes.js
var require_routes = __commonJS({
  "routes.js"(exports2, module2) {
    var publicRoutes = require_publicRoutes();
    var sampleRoutes = require_sampleRoutes();
    var printRoutes = require_printRoutes();
    var handleRoutes2 = (req, res) => {
      const url = req.url;
      if (url === "/") {
        publicRoutes(res);
      } else if (url === "/sample") {
        sampleRoutes(res);
      } else if (url === "/print") {
        printRoutes(res);
      }
    };
    module2.exports = handleRoutes2;
  }
});

// app.js
var http = require("http");
var handleRoutes = require_routes();
var server = http.createServer(handleRoutes);
var PORT = 3e3;
server.listen(PORT, "localhost", () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
