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

const printRoutes = () => {
  const filePath = "urea.prn";
  const fileContent = readfile(filePath);
  if (fileContent) {
    console.log("File content read successfully:");
    console.log(fileContent);
  } else {
    console.log("Failed to read file content.");
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
module.exports = printRoutes;