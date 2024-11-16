import Todo from './todo.js'
import fs from 'fs'
import {v4 as uuidv4} from 'uuid'
import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let filePath = path.resolve(__dirname, '../database/todos.json')

class todoService {
    getData(){
        const data = fs.readFileSync(filePath, 'utf-8')
        const todos = JSON.parse(data)
        return todos.map(todo => new Todo(todo.id, todo.name, todo.description, todo.complete))
    }

    saveData(todos){
        fs.writeFileSync(filePath, JSON.stringify(todos, null, 2))
    }

    createTodo(name, description){
        const todos = this.getData()
        const newTodo = new Todo(uuidv4(), name, description, false)
        todos.push(newTodo)
        this.saveData(todos)
        return newTodo
    }

    updateTodo(data){
        const todos = this.getData()
        const {id} = data
        const todoIndex = todos.findIndex(todo => todo.id === id)
        if(todoIndex === -1) throw new Error('Task not found in db')
        todos[todoIndex] = {
            ...todos[todoIndex],
            ...data}
        this.saveData(todos)
        return todos[todoIndex]
    }

    deleteTodo(id){
        let todos = this.getData()
        todos = todos.filter(todo => todo.id !== parseInt(id))
        this.saveData(todos)
    }
}

export default new todoService()