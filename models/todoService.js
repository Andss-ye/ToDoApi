import Todo from './todo.js'
import fs from 'fs/promises'
import {v4 as uuidv4} from 'uuid'
import { fileURLToPath } from "url";
import path from "path";

class todoService {
    constructor(){
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        this.filePath = path.resolve(__dirname, '../database/todos.json')
    }
    async getData(){
        try {
            const data = await fs.readFile(this.filePath, 'utf-8')
            return JSON.parse(data)
        } catch (error) {
            throw new Error(error);
        }
    }

    async saveData(todos){
        fs.writeFile(this.filePath, JSON.stringify(todos, null, 2), 'utf-8')
    }

    async createTodo(name, description){
        const todos = await this.getData()
        const newTodo = new Todo(uuidv4(), name, description, false)
        todos.push(newTodo)
        this.saveData(todos)
        return newTodo
    }

    async updateTodo(data){
        const todos = await this.getData()
        const {id, name, description, complete} = data
        const todoIndex = todos.findIndex(todo => todo.id === id)
        if(todoIndex === -1) throw new Error('Task not found in db')
        if (name !== undefined) todos[todoIndex].name = name;
        if (description !== undefined) todos[todoIndex].description = description;
        if (complete !== undefined) todos[todoIndex].complete = complete;
        this.saveData(todos)
        return todos[todoIndex]
    }

    async deleteTodo(id){
        let todos = await this.getData()
        todos = todos.filter(todo => todo.id !== (id))
        await this.saveData(todos)
    }
}

export default new todoService()