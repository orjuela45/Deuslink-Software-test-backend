import mongoose from "mongoose";

mongoose.set('strictQuery', false);

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN || '')
    console.log("Data base online")
  } catch (error) {
    throw new Error('Error when try to start db')
  }
}

export default dbConnection;