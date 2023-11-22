import { data } from "../data/data.js";

export const home = (req, res) => {
  return res.render("home", {
    title: "csv-upload",
    data: data,
  });
};

export const create = (req, res) => {
  // console.log("hi")
  return res.render("_create",{
    title:"create"
  });
};

export const created = (req, res) => {
  console.log("inside created :",req.body.filename)
  return res.redirect("/")
};
