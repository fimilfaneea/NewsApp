import React, { useState } from "react";

export default function TicketForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("1");

  const priorityLabels = {
    1: "Low",
    2: "Medium",
    3: "High",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearForm();
  };

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setPriority("1");
  };

  return (
    <form className="ticket-form" onSubmit={handleSubmit}>
      <div>
        <label>
          <title>Title</title>
          <input
            className="form-input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </label>
      </div>
      <div>
        <label>
          <title>Description</title>
          <textarea
            className="form-input"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </label>
      </div>
      <fieldset className="priority-fieldset">
        <legend>Priority</legend>
        {Object.entries(priorityLabels).map(([value, label]) => (
          <label key={value} className="priority-label">
            <input
              type="radio"
              name="priority"
              value={value}
              checked={priority === value}
              className="priority-input"
              onChange={(e) => setPriority(e.target.value)}
            />
            {label}
          </label>
        ))}
      </fieldset>
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
}
