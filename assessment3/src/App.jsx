import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim() === "") {
      setError("Task cannot be empty!");
      return;
    }

    setError("");

    if (editIndex !== null) {
      const updated = [...todos];
      updated[editIndex].text = input;
      setTodos(updated);
      setEditIndex(null);
    } else {
      setTodos([...todos, { text: input, completed: false }]);
    }

    setInput("");
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setInput(todos[index].text);
    setEditIndex(index);
  };

  const toggleComplete = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  return (
    <div style={styles.fullScreen}>
      <div style={styles.container}>
        <h1 style={styles.title}>Assessment3 - Todo App</h1>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Enter a task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.addBtn}>
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </form>

        {error && <p style={styles.error}>{error}</p>}

        <div style={styles.todoList}>
          {todos.length === 0 ? (
            <p style={styles.empty}>No tasks yet</p>
          ) : (
            todos.map((todo, index) => (
              <div
                key={index}
                style={{
                  ...styles.todoItem,
                  background: todo.completed ? "#d1fae5" : "#f1f5f9"
                }}
              >
                <span
                  onClick={() => toggleComplete(index)}
                  style={{
                    ...styles.text,
                    textDecoration: todo.completed
                      ? "line-through"
                      : "none"
                  }}
                >
                  {todo.text}
                </span>

                <div>
                  <button
                    onClick={() => handleEdit(index)}
                    style={styles.editBtn}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    style={styles.deleteBtn}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  fullScreen: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #4f46e5, #06b6d4)"
  },
  container: {
    width: "100%",
    maxWidth: "600px",
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#111827"
  },
  form: {
    display: "flex",
    gap: "10px"
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px"
  },
  addBtn: {
  padding: "10px 16px",
  background: "#facc15",   
  color: "#000000",        
  border: "none",
  borderRadius: "6px",
  fontWeight: "600",
  cursor: "pointer"
},
  error: {
    color: "red",
    marginTop: "10px"
  },
  todoList: {
    marginTop: "20px"
  },
  todoItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px"
  },
 text: {
  flex: 1,
  cursor: "pointer",
  color: "#111827"
},
  editBtn: {
    background: "#f59e0b",
    color: "white",
    border: "none",
    padding: "6px 10px",
    marginRight: "5px",
    borderRadius: "4px",
    cursor: "pointer"
  },
  deleteBtn: {
    background: "#ef4444",
    color: "white",
    border: "none",
    padding: "6px 10px",
    borderRadius: "4px",
    cursor: "pointer"
  },
  empty: {
    textAlign: "center",
    color: "#6b7280"
  }
};

export default App;