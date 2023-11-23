import multer from "multer";
import csv from "csv-parser";
import fs from "fs";
import path from "path";

export const home = (req, res) => {
  const files = fs.readdirSync(path.join(path.resolve(), "uploads"));
  return res.render("home", {
    title: "home",
    files: files,
  });
};

export const upload = (req, res) => {
  return res.render("_upload", {
    title: "upload",
  });
};

// export const created = (req, res) => {
//   console.log("inside created :", req.body.filename);
//   return res.redirect("/");
// };

export const deleteFile = (req, res) => {
  console.log("params :", req.params.filename);
  const filename = req.params.filename;
  const filePath = path.join(path.resolve(), "uploads", filename);
  // Check if the file exists
  if (fs.existsSync(filePath)) {
    // Delete the file
    fs.unlinkSync(filePath);
    console.log(`${filename} has been deleted.`);
  } else {
    console.log(`${filename} does not exist.`);
  }
  return res.redirect("/");
};

export const displayCsvFile = (req, res) => {
  const rows = [];
  let headers = [];
  const filename = req.params.filename;
  const filePath = path.join(path.resolve(), "uploads", filename);
  fs.createReadStream(filePath)
    .pipe(csv())
    .on("headers", (headerList) => {
      headers = headerList;
    })
    .on("data", (row) => {
      rows.push(row);
    })
    .on("end", () => {
      // Render the data in table format
      return res.render("_displayTable", {
        title: "display-csv-file",
        filename,
        rows,
        headers,
      });
    });
};
