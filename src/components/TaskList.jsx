import TaskItem from "./TaskItem";

const TaskList = ({ tasks, editTask, deleteTask }) => {
  return (
    <div className="space-y-2">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          editTask={(newTask) => editTask(index, newTask)}
          deleteTask={() => deleteTask(index)}
        />
      ))}
    </div>
  );
};

export default TaskList;