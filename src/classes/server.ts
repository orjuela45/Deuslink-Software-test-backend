import express, { Application } from "express";
import cors from "cors";
import dbConnection from '../database/config';

class Server {
  private app: Application;
  private port: string;

  constructor(){
    this.app = express();
    this.port = process.env.PORT || '8000';

    this.dbConnection();
    this.middelware();
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
}

export default Server;