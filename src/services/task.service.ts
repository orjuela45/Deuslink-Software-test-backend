import { timeZoneConvert } from "../helpes/";
import { TaskInterface } from "../interfaces/task.interface";
import Task from "../models/task.model";

class TaskService{
  constructor(
    readonly taskProvider = Task
  ){}

  getAll = async() => {
    return await this.taskProvider.find(); 
  }

  getByID = async (id: string) => {
    return await this.taskProvider.findById(id)
  }

  create = async (task: TaskInterface) => {
    task.date = timeZoneConvert(new Date(task.date))
    return await this.taskProvider.create(task)
  }

  delete = async (id: string) => {
    return await this.taskProvider.findByIdAndDelete(id)
  }

  update = async (taskUpdate: TaskInterface, id: string) => {
    return await this.taskProvider.findByIdAndUpdate(id, taskUpdate, {new: true})
  }
}

export default TaskService