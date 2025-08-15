import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`🟢 MongoDB conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error(`🔴 Error de conexión: ${error.message}`);
    process.exit(1); // Detiene el servidor si falla
  }
};

export default connectDB;
