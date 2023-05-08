import Task from "../models/task.model";

class TaskService{
  constructor(
    readonly taskProvider = Task
  ){}

  getAll = async() => {
    return await this.taskProvider.find(); 
  }
}

export default TaskService