import express, { Application } from "express";
import cors from "cors";

class Server {
  private app: Application;
  private port: string;

  constructor(){
    this.app = express();
    this.port = process.env.PORT || '8000';
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
}

export default Server;