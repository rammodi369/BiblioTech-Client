import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard'; 

const ManageBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchBooks = async () => {
     
      try {
        const response = await axios.get('http://localhost:5000/api/books',{
          headers: {
            Authorization: `Bearer ${token}`,
          }}); 
        setBooks(response.data.books);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching books:', error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleDelete = async (bookId) => {
    try {
      await axios.delete(`http://localhost:5000/api/books/${bookId}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        }}); 
      setBooks(books.filter((book) => book._id !== bookId));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  // console.log(books);
  return (
    <div className="container mx-auto px-4 py-8">
      {/* <h2 className="text-2xl font-semibold mb-4">Manage Books</h2> */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {books.map((book) => (
            <div key={book._id} className="relative">
              <BookCard book={book} />
              <button
                onClick={() => handleDelete(book._id)}
                className="absolute top-4 right-[-2] mt-2 mr-2 px-3 py-1 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-200"
              >
                Delete Book
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageBooks;
