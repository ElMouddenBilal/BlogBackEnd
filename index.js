import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import blogRoutes from "./routes/blogRoutes.js";
import authRoutes from "./routes/authRoutes.js"; // ⬅️ NUEVO

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Rutas API
app.use("/api/auth", authRoutes);   // ⬅️ NUEVO
app.use("/api/blogs", blogRoutes);

// Ruta base
app.get("/", (req, res) => {
  res.send("API funcionando correctamente 🚀");
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Conexión a MongoDB establecida");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Servidor en puerto ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Error de conexión a MongoDB:", err);
  });
