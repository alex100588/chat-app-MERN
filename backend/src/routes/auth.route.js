import express from "express";
import {signup, login, logout, updateProfile, checkAuth} from "../controllers/auth.controller.js";
import { protectedRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

// Updates can be made only if the user is authentificated, authentification function in protected route
router.put('/update-profile', protectedRoute, updateProfile)

router.get("/check", protectedRoute, checkAuth)

export default router;
