// backend/routes/blogRoutes.js
import express from 'express';
import {
  createBlog,
  getBlogs,
  getBlogById,
  deleteBlog,
  updateBlog
} from '../controllers/blogController.js';
import { verifyAdmin } from '../middleware/auth.js';

const router = express.Router();

// Públicas
router.get('/', getBlogs);
router.get('/:id', getBlogById);

// Solo admin (logueado)
router.post('/', verifyAdmin, createBlog);
router.put('/:id', verifyAdmin, updateBlog);
router.delete('/:id', verifyAdmin, deleteBlog);

export default router;
