// backend/middleware/auth.js
export const verifyAdmin = (req, res, next) => {
  const auth = req.headers.authorization || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : null;
  if (token === "demo-admin-token") return next();
  return res.status(401).json({ message: "No autorizado" });
};
