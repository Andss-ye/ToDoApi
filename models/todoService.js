import Todo from './todo.js'
import fs from 'fs'
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
}