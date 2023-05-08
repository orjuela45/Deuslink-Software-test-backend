import { Request, Response } from "express";
import TaskService from "../services/task.service";
import { TaskInterface } from "../interfaces/task.interface";

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

  getTask = async(req: Request, res: Response) => {
    const {id} = req.params;
    const task = await this.taskService.getByID(id)
    if (!task) return res.status(404).json({msg:'no data'})
    return res.json(task)
  }

  createTask = async (req: Request<{},{},TaskInterface>, res: Response) => {
    const {title, description, date, pinned, icon, tags} = req.body
    const task = await this.taskService.create({title, description, date, pinned, icon, tags})
    return res.json(task);
  }

  deleteTask = async (req: Request, res: Response) => {
    const {id} = req.params;
    return res.json(await this.taskService.delete(id))
  }

  updateTask = async (req: Request<{id: string},{},TaskInterface>, res: Response) => {
    const {id} = req.params;
    const {title, description, date, pinned, icon, tags} = req.body
    const taskUpdated = await this.taskService.update({title, description, date, pinned, icon, tags}, id)
    return res.json(taskUpdated)
  }
}

export default TaskController