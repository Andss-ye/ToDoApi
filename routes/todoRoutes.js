import express from 'express';

const router = express.Router();

router.get('/todos', (req, res) => {
    res.json({
        todos: []
    });
});
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