import mongoose from 'mongoose';

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) return;

  try {
    await mongoose
      .connect(`mongodb+srv://${process.env.MONGODB_URI}`)
      .then(() => console.log('Connected to MongoDB successfully'))
      .catch((err) => console.error('MongoDB connection error:', err));
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
