import express from "express";
import { home, create, created } from "../controller/controller.js";

export const router = express.Router();

router.get("/", home);
router.post("/", created);

router.get("/create", create);
