import React, { useState } from "react";
import "./UserInput.css";

const UserInput = ({ onAddUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = { name, email };
    onAddUser(newUser);
    setName("");
    setEmail("");
  };

  const handleClear = () => {
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="user-input">
      <h2>Enter User Details</h2>
      <label>
        <span>Name</span>
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        <span>Email</span>
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <div className="buttons-container">
        <button type="submit">Submit</button>
        <button type="button" onClick={handleClear}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default UserInput;
