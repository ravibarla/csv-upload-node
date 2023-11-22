import express from "express";
import { home, create, created, uploaded } from "../controller/controller.js";
import csv from "csv-parser";
import { upload } from "../index.js";
import fs from "fs";
import path from "path";

export const router = express.Router();

router.get("/", home);
// router.post("/", created);
// router.post("/", uploaded);

router.get("/create", create);

router.post("/uploads", (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("uploaded");
    }
  });
  console.log("uploaded ...");
  return res.redirect("/")
});
