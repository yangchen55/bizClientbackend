import express from "express";
import { getAllBlog } from "../models/BlogModel.js";
const router = express.Router();
import path from "path";
router.get("/", async (req, res, next) => {
    try {
        const blogs = await getAllBlog();
        res.json({
            status: "success",
            message: "Blog lists are here",
            blogs,
        });
    } catch (error) {
        next(error);
    }
});




export default router;