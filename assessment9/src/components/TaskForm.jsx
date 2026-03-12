import { useState, useEffect, useRef } from "react";

const TaskForm = ({ onSave, editTask }) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Pending");

  const noteRef = useRef();

  // Focus on mount
  useEffect(() => {
    noteRef.current.focus();
  }, []);

  // Fill form when editing
  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title);
      setStatus(editTask.status);
      noteRef.current.value = editTask.note;
    }
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = {
      id: editTask ? editTask.id : null,
      title,
      status,
      note: noteRef.current.value
    };

    onSave(task);

    setTitle("");
    setStatus("Pending");
    noteRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      {/* Controlled Input */}
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        required
      />

      {/* Controlled Select */}
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>Pending</option>
        <option>Completed</option>
      </select>

      {/* Uncontrolled Input */}
      <input
        ref={noteRef}
        placeholder="Note (Uncontrolled)"
      />

      <button type="submit">
        {editTask ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default TaskForm;