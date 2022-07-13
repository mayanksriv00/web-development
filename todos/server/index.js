//Importing modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

//POST Request adding entry to the DATABASE
//Here I am directly inserting to the database
app.post('/todo', async (req, res) => {
  try {
    console.log(req.body);
    const {
      description
    } = req.body;
    const allTodos = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description]);
    res.json(allTodos.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//retrive all data from the database
app.get('/todo', async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//update entry in the todo list DATABASE
app.put("/todo/:id", async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const {
      description
    } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );

    res.json("Todo was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

//delete entry from the DATABASE
app.delete("/todos/:id", async (req, res) => {
  try {
    const {
      id
    } = req.params;
    console.log(id);
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id
    ]);
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});


//starting server in the localhost
app.listen(3000, () => {
  console.log("Server Started ... ");
});