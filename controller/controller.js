import { data } from "../data/data.js";
import multer from "multer";
import csv from "csv-parser";
import fs from "fs";
import path from "path";

export const home = (req, res) => {
  return res.render("home", {
    title: "csv-upload",
    data: data,
  });
};

export const create = (req, res) => {
  return res.render("_create", {
    title: "create",
  });
};

export const created = (req, res) => {
  console.log("inside created :", req.body.filename);
  return res.redirect("/");
};


export const uploaded = (req, res) => {
  
};
