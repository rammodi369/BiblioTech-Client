// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { ChevronLeft } from 'lucide-react';

// function UserHistory() {
//   const { id } = useParams();
//   const Navigate =useNavigate();
//   const [userHistory, setUserHistory] = useState(null);
//   const handleClick=()=>{
//     Navigate('/librarian/users-history')
//   }

//   useEffect(() => {
//     const fetchUserHistory = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         // console.log(token , id);
//         const response = await axios.get(`http://localhost:5000/api/user-history/${id}`,{
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           });
         
//         setUserHistory(response.data);
//       } catch (error) {
//         console.error('Error fetching user history:', error);
//       }
//     };

//     fetchUserHistory();
//   }, [id]);

//   if (!userHistory) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-semibold mb-6">{userHistory.username}'s History</h1>

//       <div>
//         <h2 className="text-xl font-semibold mb-4">Borrowed Books</h2>
//         <ul className="list-disc">
//           {userHistory.booksBorrowed.length > 0 ? (
//             userHistory.booksBorrowed.map((book, index) => (
//               <li key={index}>
//                 {book.title} by {book.author} - Borrowed on: {new Date(book.borrowedDate).toLocaleDateString()} - Returned on: {book.returnDate}
//               </li>
//             ))
//           ) : (
//             <li>No books borrowed</li>
//           )}
//         </ul>
//       </div>

//       <div>
//         <h2 className="text-xl font-semibold mb-4 mt-8">Currently Borrowing</h2>
//         <ul className="list-disc">
//           {userHistory.booksBorrowingCurrently.length > 0 ? (
//             userHistory.booksBorrowingCurrently.map((book, index) => (
//               <li key={index}>
//                 {book.title} by {book.author}
//               </li>
//             ))
//           ) : (
//             <li>Not currently borrowing any books</li>
//           )}
//         </ul>
//       </div>
//       <button
//         className="mt-8 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
//         onClick={handleClick}
//         >
//          <div className='flex '>  <ChevronLeft className=" h-6 " />    Go Back</div>
//       </button>
//     </div>
//   );
// }

// export default UserHistory;
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ChevronLeft } from 'lucide-react';

function UserHistory() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userHistory, setUserHistory] = useState(null);

  const handleClick = () => {
    navigate('/librarian/users-history');
  };

  useEffect(() => {
    const fetchUserHistory = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:5000/api/user-history/${id}`, {
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
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">{userHistory.username}'s History</h1>

        {/* Borrowed Books Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Borrowed Books</h2>
          {userHistory.booksBorrowed.length > 0 ? (
            <div className="space-y-4">
              {userHistory.booksBorrowed.map((book, index) => (
                <div key={index} className="p-4 bg-blue-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <p className="text-lg font-semibold text-gray-800">{book.title} by {book.author}</p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Borrowed on:</span> {new Date(book.borrowedDate).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Returned on:</span> {book.returnDate ? new Date(book.returnDate).toLocaleDateString() : 'Not returned yet'}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No books borrowed</p>
          )}
        </div>

        {/* Currently Borrowing Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Currently Borrowing</h2>
          {userHistory.booksBorrowingCurrently.length > 0 ? (
            <div className="space-y-4">
              {userHistory.booksBorrowingCurrently.map((book, index) => (
                <div key={index} className="p-4 bg-blue-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <p className="text-lg font-semibold text-gray-800">{book.title} by {book.author}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">Not currently borrowing any books</p>
          )}
        </div>

        {/* Go Back Button */}
        <button
          className="mt-8 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
          onClick={handleClick}
        >
          <div className="flex items-center">
            <ChevronLeft className="h-5 w-5 mr-2" />
            Go Back
          </div>
        </button>
      </div>
    </div>
  );
}

export default UserHistory;