import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function UsersHisList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token =localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/admin/users',{
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
  }, []);


return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6 text-center">All Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div 
            key={user._id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <Link to={`/librarian/users-history/${user._id}`} className="block h-full">
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{user.username}</h2>
                <p className="text-sm text-gray-600">Role : {user.role}</p>
                {/* Would add rollNo of users too in future in User Model */}
                {/* <p className="text-sm text-gray-600">Role : {user.rollNo}</p> */}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsersHisList;
