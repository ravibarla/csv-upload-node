import express, { urlencoded } from "express";
import expressEjsLayouts from "express-ejs-layouts";
import { router } from "./routes/index.js";
import path from "path";
import multer, { diskStorage } from "multer";
import csv from "csv-parser";
import fs from "fs";

//create server
const app = express();
const port = process.env.PORT || 3100;

// // Set the view engine to use EJS
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "views"));

//set up express ejs layout
app.use(expressEjsLayouts);
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

//set up url encoded
app.use(urlencoded({ extended: true }));
app.use(express.json());

// Start the server
app.listen(port, () => {
  console.log("app is running successfully on port :", port);
});

//set up router
app.use("/", router);

//set up multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.resolve(), "uploads"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    // cb(null, uniqueSuffix + path.extname(file.originalname));
    cb(null, file.originalname);
  },
});

//function that handle file upload

export const upload = multer({
  storage: storage,
}).single("csvFile");
