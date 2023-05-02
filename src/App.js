import React, { useState, useEffect } from "react";
import UserList from "./UseList";
import UserInput from "./UserInput";
import "./styles.css";

const App = () => {
  const [users, setUsers] = useState([]);

  const handleAddUser = (newUser) => {
    const updatedUsers = [...users, { ...newUser, id: Date.now() }];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    window.alert("User details have been saved");
  };

  const handleDeleteUser = (userToDelete) => {
    const updatedUsers = users.filter((user) => user.id !== userToDelete.id);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  return (
    <div className="app-container">
      <UserInput onAddUser={handleAddUser} />
      <UserList users={users} onDeleteUser={handleDeleteUser} />
    </div>
  );
};

export default App;
