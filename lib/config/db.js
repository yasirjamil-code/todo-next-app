import mongoose from "mongoose";

export const connnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://yasirjamil:wqRSqbhn5GmxKo4k@cluster0.5vebh.mongodb.net/todo-app"
  );
};
console.log("db connected");
