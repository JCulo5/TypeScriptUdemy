//import {createServer} from 'node:http';

// const server=createServer((req,res)=>{
//     console.log(req.method);
//     res.end('Hello, TypeScript with Node.js!');
// });

// server.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });

import express, { NextFunction,Request, Response } from "express";
import todoRoutes from "./routes/todo.js";

const app = express();
app.use(express.json());
app.use(todoRoutes);

app.use((err:Error,req:Request,res:Response,next:NextFunction)=>{
    res.status(500).json({message: err.message});
});

app.listen(3000);

// app.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });