import { Router } from "express";
import TaskController from "../controllers/task.controller";

const router = Router();
const taskController = new TaskController();

router.get("/", taskController.getAll);
router.get("/:id", taskController.getTask);

router.post("/", taskController.createTask);

router.delete("/:id", taskController.deleteTask)

router.put("/:id", taskController.updateTask)

export default router;