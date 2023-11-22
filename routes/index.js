import express from "express";
import { home } from "../controller/controller.js";


export const router=express.Router()

router.get("/",home)