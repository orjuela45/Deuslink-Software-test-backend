import { Schema, model } from "mongoose";
import { TaskInterface } from "../interfaces/task";

const taskSchema = new Schema<TaskInterface>({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  tags: {
    type: [String]
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: Date,
  },
  pinned: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String
  },
}, {
  versionKey: false,
  timestamps: true
})

export default model('Task', taskSchema)