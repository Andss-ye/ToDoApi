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