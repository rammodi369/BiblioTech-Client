import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { clearUser } from '../../redux/userslice';

function UpcomingBooks() {
  const [books, setBooks] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchBooks = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://localhost:5000/api/filter/books/latest-books', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setBooks(response.data);
        console.log('latestBooks',response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, [dispatch]);

  return (
    <section className="py-10 bg-gray-50 mb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center mb-8">
          <div className="w-full lg:w-auto mb-4 lg:mb-0">
            <p className="section-subtitle text-gray-600">Check out the latest collection</p>
            <h2 className="section-title text-3xl font-bold">Latest Books</h2>
          </div>
          {/* Uncomment and update this section if you want to add filters in the future */}
          {/* <ul className="filter-list flex space-x-4">
            <li><button className="filter-btn px-4 py-2 rounded bg-blue-500 text-white">Science</button></li>
            <li><button className="filter-btn px-4 py-2 rounded bg-gray-200">Geography</button></li>
            <li><button className="filter-btn px-4 py-2 rounded bg-gray-200">History</button></li>
          </ul> */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingBooks;
