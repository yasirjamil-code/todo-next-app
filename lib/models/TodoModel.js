import mongoose from "mongoose";
const Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      requied: true,
    },
    description: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const TodoModel = mongoose.models.todo || mongoose.model("todo", Schema);

export default TodoModel;
