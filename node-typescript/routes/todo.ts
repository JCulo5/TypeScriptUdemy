import express, {Request,Response} from 'express';
import { addTodo, getTodos, getTodo, updateTodo, removeTodo } from '../data.js';
import { get } from 'http';

const router = express.Router();

// function handlePostTodo(req: Request, res: Response) {
//     // Logic to handle creating a new todo item
// }

router.post('/todos', (req, res) => {
    const text = req.body.text;
    const addedTodo = addTodo(text);

    res.json({ message: 'Todo added successfully', todo: addedTodo });
});

router.get('/todos', (req, res) => {
    const todos=getTodos();
    res.json({todos});
});

router.get('/todos/:id', (req, res) => {
    const todo=getTodo(+req.params.id);
    res.json({todo});
});

router.patch('/todos/:id', (req, res) => {
    const updatedTodo = updateTodo(+req.params.id, req.body.text);
    res.json({message:'Todo updated successfully',updatedTodo});
});

router.delete('/todos/:id', (req, res) => {
    // Logic to handle deleting a todo item
    removeTodo(+req.params.id);
    res.json({ message: 'Todo deleted successfully' });
});

export default router;