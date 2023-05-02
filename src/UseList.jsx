import React, { useState } from "react";
import "./UseList.css";

const UserList = ({ users, onDeleteUser }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [numUsersToShow, setNumUsersToShow] = useState(3);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setEditName(user.name);
    setEditEmail(user.email);
  };

  const handleDeleteClick = (user) => {
    const shouldDelete = window.confirm(
      `Are you sure you want to delete ${user.name}?`
    );
    if (shouldDelete) {
      const newUsers = users.filter((u) => u.id !== user.id);
      onDeleteUser(user);
      if (selectedUser && selectedUser.id === user.id) {
        setSelectedUser(null);
        setEditName("");
        setEditEmail("");
      }
    }
  };

  const handleEditClick = () => {
    const editedUser = { ...selectedUser, name: editName, email: editEmail };
    setSelectedUser(editedUser);
    setEditName("");
    setEditEmail("");
  };

  const handleLoadMoreClick = () => {
    setNumUsersToShow(numUsersToShow + 3);
  };

  return (
    <div className="user-list">
      {users.slice(0, numUsersToShow).map((user, index) => (
        <div
          key={index}
          className="user-row"
          onClick={() => handleUserClick(user)}
        >
          <div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
          <div className="user-actions">
            <button
              type="button"
              className="edit-btn"
              onClick={handleEditClick}
            >
              Edit
            </button>
            <button
              type="button"
              className="delete-btn"
              onClick={() => handleDeleteClick(user)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      {users.length > numUsersToShow && (
        <button
          type="button"
          className="load-more-btn"
          onClick={handleLoadMoreClick}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default UserList;
