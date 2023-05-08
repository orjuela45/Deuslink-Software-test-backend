import dotenv from "dotenv";
import Server from './classes/server.class';

dotenv.config();

const server = new Server();

server.listen();