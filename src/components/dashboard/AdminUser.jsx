// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useSelector } from 'react-redux';

// const AdminUsers = () => {
//   const [users, setUsers] = useState([]);
//   const token = useSelector((state) => state.user.token);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/admin/users', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         console.log(response);
//         setUsers(response.data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchUsers();
//   }, [token]);

//   const handleUserUpdate = async (userId, updatedData) => {
//     try {
//       const response = await axios.patch(
//         `http://localhost:5000/api/admin/users/${userId}`,
//         updatedData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       setUsers(users.map(user => 
//         user._id === userId ? response.data : user
//       ));
//       alert(`Data of ${updatedData.username} has been updated sucessfully`)
//     } catch (error) {
//     //   console.error('Error updating user:', error);
//     }
//   };

//   const handleInputChange = (userId, field, value) => {
//     setUsers(users.map(user => 
//       user._id === userId ? { ...user, [field]: value } : user
//     ));
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-semibold mb-4">Admin Panel - User Management</h1>
//       <table className="min-w-full bg-white">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border-b border-gray-300">Username</th>
//             <th className="py-2 px-4 border-b border-gray-300">Email</th>
//             <th className="py-2 px-4 border-b border-gray-300">Role</th>
//             <th className="py-2 px-4 border-b border-gray-300">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map(user => (
//             <tr key={user._id}>
//               <td className="py-2 px-4 border-b border-gray-300">
//                 <input
//                   type="text"
//                   value={user.username}
//                   onChange={(e) => handleInputChange(user._id, 'username', e.target.value)}
//                   className="border rounded p-2 w-full"
//                 />
//               </td>
//               <td className="py-2 px-4 border-b border-gray-300">
//                 <input
//                   type="email"
//                   value={user.email}
//                   onChange={(e) => handleInputChange(user._id, 'email', e.target.value)}
//                   className="border rounded p-2 w-full"
//                 />
//               </td>
//               <td className="py-2 px-4 border-b border-gray-300">
//                 <select
//                   value={user.role}
//                   onChange={(e) => handleInputChange(user._id, 'role', e.target.value)}
//                   className="border rounded p-2 w-full"
//                 >
//                   <option value="student">Student</option>
//                   <option value="librarian">Librarian</option>
//                   <option value="admin">Admin</option>
//                 </select>
//               </td>
//               <td className="py-2 px-4 border-b border-gray-300">
//                 <button
//                   onClick={() => handleUserUpdate(user._id, {
//                     username: user.username,
//                     email: user.email,
//                     role: user.role,
//                   })}
//                   className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
//                 >
//                   Save
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminUsers;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [token]);

  const handleUserUpdate = async (userId, updatedData) => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/admin/users/${userId}`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUsers(users.map(user => 
        user._id === userId ? response.data : user
      ));
      alert(`Data of ${updatedData.username} has been updated successfully`);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleInputChange = (userId, field, value) => {
    setUsers(users.map(user => 
      user._id === userId ? { ...user, [field]: value } : user
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-blue-600 mb-8">Admin Panel - User Management</h1>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-blue-50">
              <tr>
                <th className="py-4 px-6 text-left text-sm font-semibold text-blue-600 uppercase">Username</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-blue-600 uppercase">Email</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-blue-600 uppercase">Role</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-blue-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {users.map(user => (
                <tr key={user._id} className="hover:bg-blue-50 transition duration-200">
                  <td className="py-4 px-6">
                    <input
                      type="text"
                      value={user.username}
                      onChange={(e) => handleInputChange(user._id, 'username', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                    />
                  </td>
                  <td className="py-4 px-6">
                    <input
                      type="email"
                      value={user.email}
                      onChange={(e) => handleInputChange(user._id, 'email', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                    />
                  </td>
                  <td className="py-4 px-6">
                    <select
                      value={user.role}
                      onChange={(e) => handleInputChange(user._id, 'role', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                    >
                      <option value="student">Student</option>
                      <option value="librarian">Librarian</option>
                      <option value="admin">Admin</option>
                    </select>
                  </td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => handleUserUpdate(user._id, {
                        username: user.username,
                        email: user.email,
                        role: user.role,
                      })}
                      className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
                    >
                      Save
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;