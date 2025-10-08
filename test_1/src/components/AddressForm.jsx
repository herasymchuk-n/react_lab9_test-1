import React, { useState } from "react";

const initialFormState = { firstName: "", lastName: "", phone: "" };

function AddressForm({ addBook }) {
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.firstName.trim()) errs.firstName = "The first name is required";
    if (!form.lastName.trim()) errs.lastName = "The last name is required";
    if (!form.phone.trim()) errs.phone = "The phone is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    addBook(form);
    setForm(initialFormState);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <div>
        <label>First Name: </label>
        <input
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <span style={{ color: "red" }}>{errors.firstName}</span>}
      </div>
      <div>
        <label>Last Name:  </label>
        <input
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <span style={{ color: "red" }}>{errors.lastName}</span>}
      </div>
      <div>
        <label>Phone: </label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
        {errors.phone && <span style={{ color: "red" }}>{errors.phone}</span>}
      </div>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddressForm;