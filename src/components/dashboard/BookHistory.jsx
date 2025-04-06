// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { ChevronLeft } from 'lucide-react';


// function AdminBookHistory() {
//   const { id } = useParams();
//   const [history, setHistory] = useState([]);
//   const Navigate =useNavigate();
//   const handleClick=()=>{
//     Navigate('/admin/book-history')
//   }

//   useEffect(() => {
//     const fetchHistory = async () => {
//       try {
//         // console.log(id)
//         const token = localStorage.getItem('token');
//         const response = await axios.get(`http://localhost:5000/api/books/history/${id}`,{
//             headers:{
//                 Authorization: `Bearer ${token}`
//             },
//         });
//         setHistory(response.data);
//         // console.log(response)
//       } catch (error) {
//         console.error('Error fetching book history', error);
//       }
//     };
//     fetchHistory();
//   }, [id]);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-semibold mb-4">Book History</h1>
//       <ul className="list-disc">
//         {history.length === 0 ? (
//           <li>No history available for this book.</li>
//         ) : (
//           history.map((entry, index) => (
//             <li key={index}>
//               User: {entry.user.username} ({entry.user.email}) - Borrowed on: {new Date(entry.borrowDate).toLocaleDateString()} - Returned on: {entry.returnDate ? new Date(entry.returnDate).toLocaleDateString() : 'Not returned yet'}
//             </li>
//           ))
//         )}
//       </ul>
//       <button
//         className="mt-8 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
//         onClick={handleClick}
//         >
//          <div className='flex '>  <ChevronLeft className=" h-6 " />    Go Back</div>
//       </button>

//     </div>
//   );
// }

// export default AdminBookHistory;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

function AdminBookHistory() {
  const { id } = useParams();
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/admin/book-history');
  };

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:5000/api/books/history/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setHistory(response.data);
      } catch (error) {
        console.error('Error fetching book history', error);
      }
    };
    fetchHistory();
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-blue-600 mb-6">Book History</h1>
        {history.length === 0 ? (
          <p className="text-gray-600">No history available for this book.</p>
        ) : (
          <div className="space-y-4">
            {history.map((entry, index) => (
              <div key={index} className="p-4 bg-blue-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex flex-col space-y-2">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">User:</span> {entry.user.username} ({entry.user.email})
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Borrowed on:</span> {new Date(entry.borrowDate).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Returned on:</span> {entry.returnDate ? new Date(entry.returnDate).toLocaleDateString() : 'Not returned yet'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        <button
          className="mt-8 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
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

export default AdminBookHistory;