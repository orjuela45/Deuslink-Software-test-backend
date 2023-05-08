import { Request, Response } from "express";
import TaskService from "../services/task.service";

class TaskController{
  private taskService: TaskService;
  
  constructor(){
    this.taskService = new TaskService();
  }

  getAll = async(req: Request, res: Response) => {
    const tasks = await this.taskService.getAll();
    if (tasks.length == 0) return res.status(404).json({msg:'no data'})
    return res.json(tasks)
  }
}

export default TaskController