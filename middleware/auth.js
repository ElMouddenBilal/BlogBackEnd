// backend/middleware/auth.js
export const verifyAdmin = (req, res, next) => {
  const auth = req.headers.authorization || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : null;
  
  if (token === "demo-admin-token") {
    return next();
  }

  // Redirect to login if accessing admin route without token
  if (req.path.startsWith('/admin')) {
    return res.redirect('/login');
  }

  return res.status(401).json({ message: "No autorizado" });
};
