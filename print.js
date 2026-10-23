const fs = require("fs");
const printRoutes = () => {
  const filePath = "./dist/urea.prn";
  const fileContent = readfile(filePath);

  if (fileContent) {
    // console.log("File content read successfully:");
    // console.log(fileContent);

    const updatedContent = fileContent.replaceAll("$itemname", "Chakri");
    // console.log("Updated content:");
    // console.log(updatedContent);

    const updatedContent1 = updatedContent.replaceAll("$weight", "3");
    // console.log("Updated content:");
    // console.log(updatedContent1);

    const updatedContent2 = updatedContent1.replaceAll("$price", "23");
    // console.log("Updated content:");
    // console.log(updatedContent2);

    const updatedContent3 = updatedContent2.replaceAll("$date", "22/10/26");
    console.log("Updated content:");
    console.log(updatedContent3);
  } else {
    console.log("Failed to read file content.");
  }
};

const readfile = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return data;
  } catch (err) {
    console.error(`Error reading file from disk: ${err}`);
    return null;
  }
};

printRoutes();
