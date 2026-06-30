import React, { useState, useEffect } from "react";

function TaskForm({ addTask, editingTask, updateTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setCompleted(editingTask.completed);
    } else {
      setTitle("");
      setDescription("");
      setCompleted(false);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Title is required");
      return;
    }

    const task = {
      title,
      description,
      completed,
    };

    if (editingTask) {
      updateTask(editingTask.id, task);
    } else {
      addTask(task);
    }

    setTitle("");
    setDescription("");
    setCompleted(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2> {editingTask ? "Edit Task" : "Add Task"} </h2>{" "}
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />{" "}
      <br />
      <br />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />{" "}
      <br />
      <br />
      <label>
        Completed{" "}
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />{" "}
      </label>{" "}
      <br />
      <br />
      <button type="submit">
        {" "}
        {editingTask ? "Update Task" : "Add Task"}{" "}
      </button>{" "}
    </form>
  );
}

export default TaskForm;
