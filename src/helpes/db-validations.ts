import TaskService from "../services/task.service";

export const existTaskByID = async (id: string) => {
  const taskService = new TaskService()
  const existTask = await taskService.getByID(id);
  if (!existTask) {
    throw new Error(`Task with id ${id} not found`);
  }
  return true
};
