const TaskItem = ({ task, onDelete, onEdit }) => {
  return (
    <div className="card">
      <h3>{task.title}</h3>

      <span
        className={`status ${
          task.status === "Pending" ? "pending" : "completed"
        }`}
      >
        {task.status}
      </span>

      <p>{task.note}</p>

      <div>
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;