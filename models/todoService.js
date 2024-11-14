import Todo from './todo.js'
import fs from 'fs'
import {v4 as uuidv4} from 'uuid'
filePath = '../database/todos.json'

class todoService {
    getData(){
        const data = fs.readFileSync(filePath, 'utf-8')
        const todos = JSON.parse(data)
        return todos.map(todo => new Todo(todo.id, todo.title, todo.description, todo.complete))
    }

    saveData(todos){
        fs.writeFileSync(filePath, JSON.stringify(todos, null, 2))
    }

    createTodo(todos){
        const todos = this.getData()
        const newTodo = new Todo(uuidv4(), todos.title, todos.description, false)
        todos.push(newTodo)
        this.saveData(todos)
        return newTodo
    }
}