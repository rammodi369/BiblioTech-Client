// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AdminHomepage = () => {
//   const [stats, setStats] = useState({
//     totalBooks: 0,
//     totalUsers: 0,
//     totalRequests: 0,
//     pendingRequests: 0,
//     approvedRequests: 0,
//     rejectedRequests: 0,
//   });

//   useEffect(() => {
//     const fetchStats = async () => {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         console.error('No token found');
//         return;
//       }

//       try {
//         const res = await axios.get('http://localhost:5000/api/admin/dashboard/stats', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setStats(res.data);
//       } catch (error) {
//         console.error('Error fetching stats:', error);
//       }
//     };

//     fetchStats();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-8 mt-16">
//       <div className="container mx-auto">
//         <h1 className="text-4xl font-bold mb-6">DashBoard stats</h1>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold mb-4">Total Books</h2>
//             <p className="text-xl">{stats.totalBooks}</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold mb-4">Total Users</h2>
//             <p className="text-xl">{stats.totalUsers}</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold mb-4">Total Requests</h2>
//             <p className="text-xl">{stats.totalRequests}</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold mb-4">Pending Requests</h2>
//             <p className="text-xl">{stats.pendingRequests}</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold mb-4">Approved Requests</h2>
//             <p className="text-xl">{stats.approvedRequests}</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold mb-4">Rejected Requests</h2>
//             <p className="text-xl">{stats.rejectedRequests}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminHomepage;
"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, ClipboardList, Clock, CheckCircle, XCircle } from "lucide-react"

const AdminHomepage = () => {
  const [stats, setStats] = useState({
    totalBooks: 0,
    totalUsers: 0,
    totalRequests: 0,
    pendingRequests: 0,
    approvedRequests: 0,
    rejectedRequests: 0,
  })

  useEffect(() => {
    const fetchStats = async () => {
      const token = localStorage.getItem("token")
      if (!token) {
        console.error("No token found")
        return
      }

      try {
        const res = await axios.get("http://localhost:5000/api/admin/dashboard/stats", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        setStats(res.data)
      } catch (error) {
        console.error("Error fetching stats:", error)
      }
    }

    fetchStats()
  }, [])

  const statCards = [
    { title: "Total Books", value: stats.totalBooks, icon: BookOpen, color: "bg-blue-500" },
    { title: "Total Users", value: stats.totalUsers, icon: Users, color: "bg-green-500" },
    { title: "Total Requests", value: stats.totalRequests, icon: ClipboardList, color: "bg-purple-500" },
    { title: "Pending Requests", value: stats.pendingRequests, icon: Clock, color: "bg-yellow-500" },
    { title: "Approved Requests", value: stats.approvedRequests, icon: CheckCircle, color: "bg-teal-500" },
    { title: "Rejected Requests", value: stats.rejectedRequests, icon: XCircle, color: "bg-red-500" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-indigo-800 text-center">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {statCards.map((card, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-xl border-none">
              <CardHeader className={`${card.color} text-white p-4`}>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-lg font-semibold">{card.title}</span>
                  <card.icon className="h-8 w-8" />
                </CardTitle>
              </CardHeader>
              <CardContent className="bg-white p-6">
                <p className="text-4xl font-bold text-gray-800">{card.value.toLocaleString()}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdminHomepage

