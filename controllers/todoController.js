import todoService from "../models/todoService.js";

export const getAllTodos = async (req, res) => {
    try {
        const todos = await todoService.getData();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const createTodo = async (req, res) => {
    try {
        const {name, description} = req.body
        const newTodo = await todoService.createTodo(name, description)
        res.status(201).json(newTodo)
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const updateTodo = async (req, res) => {
    try {
        const {id} = req.params
        const {name, description, complete} = req.body
        const updatedTodo = await todoService.updateTodo({id, name, description, complete})
        res.status(200).json(updatedTodo)
    } catch (error) {
        res.status(500).send(error.message);   
    }
}

export const deleteTodo = async (req, res) => {
    try {
        const {id} = req.params
        await todoService.deleteTodo(id)
        res.status(200).json({message: 'Todo deleted'})
    } catch (error) {
        res.status(500).send(error.message);   
    }
}