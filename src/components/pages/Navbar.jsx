// 'use client'

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom'
// import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
// import { useSelector } from 'react-redux'


// export default function Navbar() {
//   const user =useSelector((state)=>state.user.user);
//   const role=user.role;
//   const menuItems = [
//     {
//       name: 'Home',
//       href: '/',
//     },
//     {name:'Profile',
//       href:'/profile'
//     },
//     {
//       name:'Admin-Dashboard',
//       href:'/admin'
//     },
//     {
//       name:"Librarian",
//       href:'/librarian'
//     },
//     {
//       name:'History',
//       href:`/users-history/${user.id}`
//     },
//     {
//       name:'Logout',
//       href:'/'
//     },
//     {
//       name: 'About-Us',
//       href: '/about-us',
//     },
//     {
//       name: 'Contact Us',
//       href: '/feedback',
//     },
//   ]
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false)

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen)
//   }
  
//   const [navbarBg, setNavbarBg] = useState('bg-transparent');

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setNavbarBg('bg-white'); 
//       } else {
//         setNavbarBg('bg-transparent'); 
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
//   const handleLogout = () => {
//     localStorage.removeItem('token'); 
//     window.location.href = '/login'; 
//   };
  

//   return (
//     <div className={`text-lg fixed top-0 left-0 w-full ${navbarBg} transition-colors duration-500`}>
//       <div className=" mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
//         <Link to="/" className="inline-flex items-center space-x-2" >
//           <span>
//             <svg
//               width="30"
//               height="30"
//               viewBox="0 0 50 56"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
//                 fill="black"
//               />
//             </svg>
//           </span>
//           <span className="font-bold hover:text-white">Digi-Library</span>
//         </Link>
//         <div className="hidden lg:block">
//           <ul className="ml-12 inline-flex space-x-8">
//           {menuItems.map((item) => {
//                       if (item.name === 'Admin-Dashboard' && role !== 'admin') {
//                         return null;
//                       }
//                       // if(item.name==='History'&&role!=='student')
//                       //   return null;
//                       if (item.name === 'Librarian' && role !== 'librarian') {
//                         return null;
//                       }
//                       if (item.name === 'Logout') {
//                         return null;
//                       }
//                       return (
//                         <a
//                           key={item.name}
//                           href={item.href}
//                           className="-m-3 flex items-center rounded-md p-3 text-lg font-semibold hover:bg-teal-500"
//                         >
//                           <span className="ml-3 text-base font-medium text-gray-900">
//                             {item.name}
//                           </span>
//                           <span>
//                             {/* <ChevronRight className="ml-3 h-4 w-4" /> */}
//                           </span>
//                         </a>
//                       );
//                     })}
//           </ul>
//         </div>
//         <div className="flex grow justify-end">
//             <Link to="/search-books" className="flex h-10 w-[200px] rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
//           <input
//             type="text"
//             placeholder="Search"
//             className="w-full h-full bg-transparent border-none outline-none cursor-pointer"
//           />
//         </Link>
//         </div>
//         <div className="ml-2 mt-2 hidden lg:block">
//           <span className="relative inline-block">
//             <img
//               className="h-10 w-10 rounded-sm"
//               src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
//               alt={user.username}
//             />
//             <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-600 ring-2 ring-white"></span>
//           </span>
//         </div>
//         <div className="ml-2 lg:hidden">
//           <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
//         </div>
//         {isMenuOpen && (
//           <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
//             <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
//               <div className="px-5 pb-6 pt-5">
//                 <div className="flex items-center justify-between">
//                   <div className="inline-flex items-center space-x-2">
//                     <span>
//                       <svg
//                         width="30"
//                         height="30"
//                         viewBox="0 0 50 56"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
//                           fill="black"
//                         />
//                       </svg>
//                     </span>
//                     <span className="font-bold">Digi-Library</span>
//                   </div>
//                   <div className="-mr-2">
//                     <button
//                       type="button"
//                       onClick={toggleMenu}
//                       className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//                     >
//                       <span className="sr-only">Close menu</span>
//                       <X className="h-6 w-6" aria-hidden="true" />
//                     </button>
//                   </div>
//                 </div>
//                 <div className="mt-6">
//                   <nav className="grid gap-y-4">
//                   {menuItems.map((item) => {
//                       if (item.name === 'Admin-Dashboard' && role !== 'admin') {
//                         return null;
//                       }
//                       if(item.name==='History'&&role!=='student')
//                         return null;
//                       if (item.name === 'Librarian' && role !== 'librarian') {
//                         return null;
//                       }
//                       if (item.name === 'Logout') {
//                         return (
//                           <button
//                             key={item.name}
//                             onClick={handleLogout}
//                             className="-m-3 flex items-center rounded-md p-3 text-lg font-semibold hover:bg-teal-500"
//                           >
//                             <span className="ml-3 text-base font-medium text-gray-900">
//                               {item.name}
//                             </span>
//                             <span>
//                               <ChevronRight className="ml-3 h-4 w-4" />
//                             </span>
//                           </button>
//                         );
//                       }
//                       return (
//                         <a
//                           key={item.name}
//                           href={item.href}
//                           className="-m-3 flex items-center rounded-md p-3 text-lg font-semibold hover:bg-teal-500"
//                         >
//                           <span className="ml-3 text-base font-medium text-gray-900">
//                             {item.name}
//                           </span>
//                           <span>
//                             {/* <ChevronRight className="ml-3 h-4 w-4" /> */}
//                           </span>
//                         </a>
//                       );
//                     })}
//                   </nav>
//                 </div>
//                 <div className="ml-3 mt-4 flex items-center space-x-2">
//                   <img
//                     className="inline-block h-10 w-10 rounded-full"
//                     src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
//                     alt={user.username}
//                   />
//                   <Link to ='/profile' className="flex flex-col">
//                     <span className="text-sm font-medium text-gray-900">{user.username}</span>
//                     <span className="text-sm font-medium text-gray-500">{user.email}</span>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useSelector } from 'react-redux'
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navigate = useNavigate();
  const user =useSelector((state)=>state.user.user);
  useEffect(() => {
    // Fetch user data (Assuming it's stored in localStorage)
    const storedUser = JSON.parse(localStorage.getItem("user"));
    console.log(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); 
        window.location.href = '/login'; 
  };

  const menuItems = [
    { name: "Home", href: "/" },
    
    ...(user?.role === "admin" ? [{ name: "Admin-Dashboard", href: "/admin" }] : []),
    ...(user?.role === "librarian" ? [{ name: "Librarian", href: "/librarian" }] : []),
    ...(user?.role === "student" ? [
      { name: "Profile", href: "/profile" },
        { name: "History", href: `/users-history/${user?.id || 1}` },
        { name: "Books", href: "/search-books" },
        { name: "Study Materials", href: "/materials" },
        { name: "Q&A Bank", href: "/question-Bank" },
        { name: "Contact Us", href: "/feedback" }
    ] : []),
    { name: "About Us", href: "/about-us" }
];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center px-4">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <span className="text-2xl font-bold text-blue-600">Biblio Tech</span>
        </Link>
        <div className="flex flex-1 items-center space-x-4">
          {user.role==="student" &&<form className="flex-1 md:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search resources..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>}
          <nav className="hidden gap-6 md:flex">
            {menuItems.map((item, index) => (
              <Link key={index} to={item.href} className="text-blue-600 hover:text-blue-500 transition-colors">
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-blue-600 hover:text-blue-500" onClick={handleLogout}>
            Logout
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className="text-blue-600 hover:text-blue-500 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
