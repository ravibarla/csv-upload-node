import express from "express";
import {
  home,
  upload as uploadController,
  deleteFile,
  displayCsvFile,
} from "../controller/controller.js";
import { upload } from "../index.js";

import fs from "fs";
import path from "path";

export const router = express.Router();

router.get("/", home);

router.get("/uploads", uploadController);

//router to control the file uploading
router.post("/uploads", (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("uploaded");
    }
  });
  console.log("uploaded ...");
  return res.redirect("/");
});

router.post("/delete/:filename", deleteFile);

router.post("/display/:filename", displayCsvFile);
