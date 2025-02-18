const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// Test Middleware
const testMiddleware = (req, res, next) => {
    console.log("Middleware executed");
    next();
};

// Mock student data
let students = [
    { id: 1, name: "John Doe", age: 20 },
    { id: 2, name: "Jane Doe", age: 22 }
];

// GET all students (display only for this route)
app.get("/students/display/all", testMiddleware, (req, res) => {
    res.json(students);
});

// GET student by ID
app.get("/students/display/:id", (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ message: "Student not found" });
    }
});

// POST add new student
app.post("/students/add", (req, res) => {
    const { id, name, age } = req.body;
    if (!id || !name || !age) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    students.push({ id, name, age });
    res.status(201).json({ message: "Student added successfully" });
});

// DELETE student by ID
app.delete("/students/delete/:id", (req, res) => {
    const studentId = parseInt(req.params.id);
    students = students.filter(s => s.id !== studentId);
    res.json({ message: "Student deleted successfully" });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
