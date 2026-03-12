import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <div>
      {tasks.length === 0 && <p>No Tasks Available</p>}

      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TaskList;