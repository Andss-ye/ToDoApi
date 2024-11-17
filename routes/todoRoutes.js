import express from 'express';
import { getAllTodos} from '../controllers/todoController.js';

const router = express.Router();

router.get('/todos', getAllTodos);
router.post('/todos', (req, res) => {
    res.json({
        message: 'Todo created'
    });
})
router.put('/todos/:id', (req, res) => {
    res.json({
        message: 'Todo updated'
    });
})
router.delete('/todos/:id', (req, res) => {
    res.json({
        message: 'Todo deleted'
    });
})

export default router;