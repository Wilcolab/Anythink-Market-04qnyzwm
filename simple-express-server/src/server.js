const express = require('express');

const app = express();
const PORT = 8001;

app.use(express.json());

let tasks = [
    "Write a diary entry from the future",
    "Create a time machine from a cardboard box",
    "Plan a trip to the dinosaurs",
    "Draw a futuristic city",
    "List items to bring on a time-travel adventure"
];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/tasks', (req, res) => {
    const { text } = req.body;
    if (typeof text !== 'string') {
        return res.status(400).json({ message: 'Invalid task format' });
    }
    tasks.push(text);
    res.json({ message: 'Task added successfully' });
});

app.get('/tasks', (req, res) => {
    res.json({ tasks });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});