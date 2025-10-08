import React, { useState } from "react";

function AddressTable({ books, updateBook }) {
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({ firstName: "", lastName: "", phone: "" });
  const [errors, setErrors] = useState({});

  const handleEditClick = (book) => {
    setEditId(book.id);
    setEditForm({ firstName: book.firstName, lastName: book.lastName, phone: book.phone });
    setErrors({});
  };

  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleSave = (id) => {
    const errs = {};
    if (!editForm.firstName.trim()) errs.firstName = "The first name is required";
    if (!editForm.lastName.trim()) errs.lastName = "The last name is required";
    if (!editForm.phone.trim()) errs.phone = "The phone is required";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    updateBook(id, editForm);
    setEditId(null);
  };

  if (books.length === 0) return <p>No data to display</p>;

  return (
    <table border="1" cellPadding="5" cellSpacing="0">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>
              {editId === book.id ? (
                <>
                  <input
                    type="text"
                    name="firstName"
                    value={editForm.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && <span style={{ color: "red" }}>{errors.firstName}</span>}
                </>
              ) : (
                book.firstName
              )}
            </td>
            <td>
              {editId === book.id ? (
                <>
                  <input
                    type="text"
                    name="lastName"
                    value={editForm.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && <span style={{ color: "red" }}>{errors.lastName}</span>}
                </>
              ) : (
                book.lastName
              )}
            </td>
            <td>
              {editId === book.id ? (
                <>
                  <input
                    type="text"
                    name="phone"
                    value={editForm.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <span style={{ color: "red" }}>{errors.phone}</span>}
                </>
              ) : (
                book.phone
              )}
            </td>
            <td>
              {editId === book.id ? (
                <button onClick={() => handleSave(book.id)}>Save</button>
              ) : (
                <button onClick={() => handleEditClick(book)}>Edit</button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AddressTable;