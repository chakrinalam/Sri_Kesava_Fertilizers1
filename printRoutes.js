const { execSync } = require("child_process");
const printRoutes = () => {
  try {
    for (let index = 0; index < 3; index++) {
      // Example: Running the Windows 'dir' command to list files
      const output = execSync(
        "copy /b test2.prn \\\\Chakri_Lenovo\\Godex",
      ).toString();
      console.log(output);
    }
  } catch (error) {
    console.error(`Error executing command: ${error.message}`);
  }
};
module.exports = printRoutes;