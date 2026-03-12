import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  // useEffect → Initial Data Load
  useEffect(() => {
    setTasks([
      { id: 1, title: "Learn React", status: "Pending", note: "Hooks" },
      { id: 2, title: "Build Project", status: "Completed", note: "CRUD App" }
    ]);
  }, []);

  // useEffect → Runs when tasks update
  useEffect(() => {
    console.log("Updated Tasks:", tasks);
  }, [tasks]);

  const saveTask = (task) => {
    if (task.id) {
      setTasks(tasks.map(t => (t.id === task.id ? task : t)));
      setEditTask(null);
    } else {
      task.id = Date.now();
      setTasks([...tasks, task]);
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const editHandler = (task) => {
    setEditTask(task);
  };

  return (
    <div className="container">
      <h1>Assessment 9 - Task Manager</h1>

      <TaskForm onSave={saveTask} editTask={editTask} />

      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onEdit={editHandler}
      />
    </div>
  );
}

export default App;