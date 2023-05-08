import express, { Application } from "express";
import cors from "cors";

import TaskRouter from "../routes/task.route";
import dbConnection from '../database/config';

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    tasks: "/api/tasks"
  }

  constructor(){
    this.app = express();
    this.port = process.env.PORT || '8000';

    this.dbConnection();
    this.middelware();
    this.routes();
  }

  listen(){
    this.app.listen(this.port, () => {
      console.log(`Port listening in ${this.port}`)
    })
  }

  middelware(){
    this.app.use(cors())
    this.app.use(express.json())
  }

  async dbConnection(){
    await dbConnection();
  }

  routes(){
    this.app.use(this.apiPaths.tasks, TaskRouter)
  }
}

export default Server;