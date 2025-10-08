import React, { useState } from "react";
import AddressForm from "./components/AddressForm";
import AddressTable from "./components/AddressTable";
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addBook = (book) => {
    setBooks([...books, { id: books.length + 1, ...book }]);
  };

  const updateBook = (id, updatedBook) => {
    setBooks(books.map((b) => (b.id === id ? { id, ...updatedBook } : b)));
  };

  const filteredBooks = books.filter(
    (b) =>
      b.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.phone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1>Address Book</h1>

      <AddressForm addBook={addBook} />

      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Search by first name, last name, or phone"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: "5px", width: "100%" }}
        />
      </div>

      <AddressTable books={filteredBooks} updateBook={updateBook} />
    </div>
  );
}

export default App;