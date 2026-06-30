import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, editTask }) {
  if (tasks.length === 0) {
    return <h3>No Tasks Available</h3>;
  }

  return (
    <div>
      <h2>Task List</h2>

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default TaskList;