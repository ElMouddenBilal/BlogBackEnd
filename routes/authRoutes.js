// backend/routes/authRoutes.js
import express from "express";

const router = express.Router();

// Login DEMO: admin / admin123
router.post("/login", (req, res) => {
  const { username, password } = req.body || {};
  if (username === "admin" && password === "admin123") {
    return res.json({
      token: "demo-admin-token",
      user: { role: "admin", username: "admin" },
    });
  }
  return res.status(401).json({ message: "Credenciales inválidas" });
});

export default router;
