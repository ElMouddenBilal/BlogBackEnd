import Blog from '../models/Blog.js';

// Crear nuevo blog
export const createBlog = async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el blog', error });
  }
};

// Obtener todos los blogs
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los blogs', error });
  }
};

// Obtener un blog por ID
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog no encontrado' });
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el blog', error });
  }
};

// Editar blog
export const updateBlog = async (req, res) => {
  try {
    const updated = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: 'Blog no encontrado' });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el blog', error });
  }
};


// Eliminar un blog
export const deleteBlog = async (req, res) => {
  try {
    const deleted = await Blog.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Blog no encontrado' });
    res.status(200).json({ message: 'Blog eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el blog', error });
  }
};
