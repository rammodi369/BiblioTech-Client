// import React, { useState } from 'react';
// import axios from 'axios';
// import { useSelector } from 'react-redux';

// const RequestItem = ({ request }) => {
//   const [status, setStatus] = useState(request.status);
//   const user = useSelector((state)=>state.user.user);
//   const role=user.role;

//   const handleResponse = async (newStatus) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.patch(`http://localhost:5000/api/book-requests/request/respond/${request._id}`, { status: newStatus }, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setStatus(newStatus);
//     } catch (error) {
//       console.error('Error responding to request:', error);
//     }
//   };

//   return (
//     <div className="bg-white p-4 rounded shadow-md">
//       <h2 className="text-lg font-semibold">{request.book.title}</h2>
//       {/* <p className="text-gray-700">Requested by: {request.user}</p> */}
//       <p className="text-gray-700">Request Type: {request.requestType}</p>
//       <p className="text-gray-700">Status: {status}</p>
//       {status === 'pending'&&role==='librarian' && (
//         <div className="mt-4">
//           <button 
//             className="bg-green-500 text-white px-4 py-2 rounded mr-2"
//             onClick={() => handleResponse('approved')}
//           >
//             Approve
//           </button>
//           <button
//             className="bg-red-500 text-white px-4 py-2 rounded"
//             onClick={() => handleResponse('rejected')}
//           >
//             Reject
//           </button>
//         </div>
//       )}
//       {role==='admin'&&
//       (
//         <p className="text-gray-700 font-bold">Only Librarian can edit requests. </p>
//       )
//       }
//     </div>
//   );
// };

// export default RequestItem;
import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const RequestItem = ({ request, onUpdate }) => {
  const [status, setStatus] = useState(request.status);
  const user = useSelector((state) => state.user.user);
  const role = user.role;

  const handleResponse = async (newStatus) => {
    try {
      const token = localStorage.getItem('token');
      await axios.patch(
        `http://localhost:5000/api/book-requests/request/respond/${request._id}`,
        { status: newStatus },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setStatus(newStatus);
      onUpdate(); // Trigger parent component to refresh the list
    } catch (error) {
      console.error('Error responding to request:', error);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-lg font-semibold">{request.book.title}</h2>
      <p className="text-gray-700">Request Type: {request.requestType}</p>
      <p className="text-gray-700">Status: {status}</p>
      {status === 'pending' && role === 'librarian' && (
        <div className="mt-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded mr-2"
            onClick={() => handleResponse('approved')}
          >
            Approve
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => handleResponse('rejected')}
          >
            Reject
          </button>
        </div>
      )}
      {role === 'admin' && (
        <p className="text-gray-700 font-bold">Only Librarian can edit requests.</p>
      )}
    </div>
  );
};

export default RequestItem;