import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const TaskItem = ({ task, editTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task);

  const handleEdit = () => {
    if (isEditing) {
      editTask(newTask);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex items-center gap-2">
      {isEditing ? (
        <Input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-grow"
        />
      ) : (
        <span className="flex-grow">{task}</span>
      )}
      <Button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</Button>
      <Button variant="destructive" onClick={deleteTask}>
        Delete
      </Button>
    </div>
  );
};

export default TaskItem;