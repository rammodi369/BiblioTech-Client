import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RequestItem from './RequestItem';

const RequestList = () => {
  const [requests, setRequests] = useState([]);

  // console.log(role);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/book-requests', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setRequests(response.data);
        // console.log(response);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Book Requests</h1>
      <div className="grid grid-cols-1 gap-4">
        {requests.map(request => (
          <RequestItem key={request._id} request={request}  />
        ))}
      </div>
    </div>
  );
};

export default RequestList;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import RequestItem from './RequestItem';

// const RequestList = () => {
//   const [requests, setRequests] = useState([]);

//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('http://localhost:5000/api/book-requests', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setRequests(response.data);
//       } catch (error) {
//         console.error('Error fetching requests:', error);
//       }
//     };

//     fetchRequests();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-3xl font-semibold text-blue-600 mb-6">Book Requests</h1>
//         <div className="space-y-4">
//           {requests.length > 0 ? (
//             requests.map((request) => (
//               <RequestItem key={request._id} request={request} />
//             ))
//           ) : (
//             <p className="text-gray-600 text-center">No book requests found.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RequestList;