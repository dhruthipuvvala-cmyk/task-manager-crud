import React from "react";

function TaskItem({ task, deleteTask, editTask }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h3> {task.title} </h3> <p> {task.description} </p>{" "}
      <p>
        <strong> Status: </strong>{" "}
        {task.completed ? "Completed ✅" : "Pending ❌"}{" "}
      </p>{" "}
      <button onClick={() => editTask(task)}> Edit </button>{" "}
      <button
        onClick={() => deleteTask(task.id)}
        style={{ marginLeft: "10px" }}
      >
        Delete{" "}
      </button>{" "}
    </div>
  );
}

export default TaskItem;
