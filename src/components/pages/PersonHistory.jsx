import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

function UserHistory() {
  const { id } = useParams();
  const Navigate =useNavigate();
  const [userHistory, setUserHistory] = useState(null);
  const handleClick=()=>{
    Navigate('/librarian/users-history')
  }

  useEffect(() => {
    const fetchUserHistory = async () => {
      try {
        const token = localStorage.getItem('token');
        // console.log(token , id);
        const response = await axios.get(`http://localhost:5000/api/user-history/${id}`,{
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
         
        setUserHistory(response.data);
      } catch (error) {
        console.error('Error fetching user history:', error);
      }
    };

    fetchUserHistory();
  }, [id]);

  if (!userHistory) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-3xl font-semibold mb-6">{userHistory.username}'s History</h1>

      <div>
        <h2 className="text-xl font-semibold mb-4">Borrowed Books</h2>
        <ul className="list-disc">
          {userHistory.booksBorrowed.length > 0 ? (
            userHistory.booksBorrowed.map((book, index) => (
              <li key={index}>
                {book.title} by {book.author} - Borrowed on: {new Date(book.borrowedDate).toLocaleDateString()} - Returned on: {book.returnDate}
              </li>
            ))
          ) : (
            <li>No books borrowed</li>
          )}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4 mt-8">Currently Borrowing</h2>
        <ul className="list-disc">
          {userHistory.booksBorrowingCurrently.length > 0 ? (
            userHistory.booksBorrowingCurrently.map((book, index) => (
              <li key={index}>
                {book.title} by {book.author}
              </li>
            ))
          ) : (
            <li>Not currently borrowing any books</li>
          )}
        </ul>
      </div>
      <button
        className="mt-8 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        onClick={handleClick}
        >
         <div className='flex '>  <ChevronLeft className=" h-6 " />    Go Back</div>
      </button>
    </div>
  );
}

export default UserHistory;
