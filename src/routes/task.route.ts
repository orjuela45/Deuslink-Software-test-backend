import { Router } from "express";
import { body, param } from "express-validator";
import TaskController from "../controllers/task.controller";
import { existTaskByID } from "../helpes";
import { validateFieldsRequest } from "../middlewares/validateFieldsRequest";

const router = Router();
const taskController = new TaskController();

router.get("/", taskController.getAll);
router.get("/:id", [
  param("id", "Id not valid").isMongoId(),
  param("id", "Id not valid").custom(existTaskByID),
  validateFieldsRequest
], taskController.getTask);

router.post("/", [
  body("title", "title is required").not().isEmpty(),
  body("date", "date is required").not().isEmpty(),
  body("date").isISO8601(),
  body("tags", "it must have unless one tag").isArray({min: 1}).optional(),
  body("pinned").isBoolean().optional(),
  validateFieldsRequest
], taskController.createTask);

router.delete("/:id", [
  param("id", "Id not valid").isMongoId(),
  param("id", "Id not valid").custom(existTaskByID),
  validateFieldsRequest
], taskController.deleteTask)

router.put("/:id", [
  param("id", "Id not valid").isMongoId(),
  param("id", "Id not valid").custom(existTaskByID),
  body("date").isISO8601().optional(),
  body("tags", "it must have unless one tag").isArray({min: 1}).optional(),
  body("pinned").isBoolean().optional(),
  validateFieldsRequest
], taskController.updateTask)

export default router;