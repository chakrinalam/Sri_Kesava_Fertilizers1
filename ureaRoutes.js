const print = require("./print");
const fs = require("fs");
const { execSync } = require("child_process");
const readfile = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return data;
  } catch (err) {
    console.error(`Error reading file from disk: ${err}`);
    return null;
  }
};

const printRoute = (req, res) => {
  const url = req.url;
  if (url === "/") {
    print(res);
  }
};

const printRoutes1 = () => {
  try {
    for (let index = 0; index < 3; index++) {
      // Example: Running the Windows 'dir' command to list files
      const output = execSync(
        "copy /b urea.prn \\\\Chakri_Lenovo\\Godex",
      ).toString();
      console.log(output);
    }
  } catch (error) {
    console.error(`Error executing command: ${error.message}`);
  }
};
module.exports = printRoutes1;
module.exports = printRoute;
