// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import BookCard from '../components/BookCard';
// import Loader from '../components/Loader';

// const SearchBooksPage = () => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [filterCategory, setFilterCategory] = useState('');
//     const [allBooks, setAllBooks] = useState([]);
//     const [books, setBooks] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [author, setAuthor] = useState('');
//     const [availability, setAvailability] = useState('');
//     const [yearOfPublication, setYearOfPublication] = useState('');
  

//   useEffect(() => {
//     const fetchBooks = async () => {
//       setLoading(true);
//       const token = localStorage.getItem('token');
//       try {
//         const response = await axios.get('http://localhost:5000/api/books', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setAllBooks(response.data.books);
//         setBooks(response.data.books);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching books:', error);
//         setLoading(false);
//       }
//     };

//     fetchBooks();
//   }, []);

//   const handleSearch = () => {
//     let filteredBooks = allBooks;

//     if (searchTerm) {
//       filteredBooks = filteredBooks.filter(book =>
//         book.title.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     if (filterCategory) {
//       filteredBooks = filteredBooks.filter(book => book.category.toLowerCase() === filterCategory.toLowerCase());
//     }

//     if (author) {
//       filteredBooks = filteredBooks.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
//     }

//     if (availability) {
//       filteredBooks = filteredBooks.filter(book => book.availability.toLowerCase() === availability.toLowerCase());
//     }

//     if (yearOfPublication) {
//       filteredBooks = filteredBooks.filter(book => book.yearOfPublication.toString() === yearOfPublication);
//     }

//     setBooks(filteredBooks);
//   };
//   return (
//     <div className="container mx-auto px-4 py-8 mt-20">
//       <h2 className="text-3xl font-semibold mb-4">Search Books</h2>
//       <div className="flex flex-col md:flex-row items-center mb-12">
//         <input
//           type="text"
//           placeholder="Search for books..."
//           className="w-full md:w-1/2 p-2 border border-gray-300 rounded mb-2 md:mb-0 md:mr-2"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <select
//           className="w-full md:w-1/4 p-2 border border-gray-300 rounded mb-2 md:mb-0 md:mr-2 "
//           value={filterCategory}
//           onChange={(e) => setFilterCategory(e.target.value)}
//         >
//           <option value="">All Categories</option>
//           <option value="fiction">Fiction</option>
//           <option value="non-fiction">Non-Fiction</option>
//           <option value="mystery">Mystery</option>
//           <option value="fantasy">Fantasy</option>
//           <option value="science">Science</option>
//           <option value="history">History</option>
//           {/* Add more categories as needed */}
//         </select>
//         <input
//           type="text"
//           placeholder="Author"
//           className="w-full md:w-1/4 p-2 border border-gray-300 rounded mb-2 md:mb-0 md:mr-2"
//           value={author}
//           onChange={(e) => setAuthor(e.target.value)}
//         />
//         <select
//           className="w-full md:w-1/4 p-2 border border-gray-300 rounded mb-2 md:mb-0 md:mr-2"
//           value={availability}
//           onChange={(e) => setAvailability(e.target.value)}
//         >
//           <option value="">All</option>
//           <option value="available">Available</option>
//           <option value="unavailable">Unavailable</option>
//         </select>
//         <input
//           type="text"
//           placeholder="Year of Publication"
//           className="w-full md:w-1/4 p-2 border border-gray-300 rounded mb-2 md:mb-0 md:mr-2"
//           value={yearOfPublication}
//           onChange={(e) => setYearOfPublication(e.target.value)}
//         />
//         <button
//           className="w-full md:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           onClick={handleSearch}
//         >
//           Search
//         </button>
//       </div>
//       {loading ? (
//         <Loader />
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {books.map((book) => (
//             <BookCard key={book._id} book={book} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchBooksPage;
"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import BookCard from "../components/BookCard"
import Loader from "../components/Loader"
import { Search, Filter, Book, User, Calendar, CheckCircle } from "lucide-react"

const SearchBooksPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCategory, setFilterCategory] = useState("")
  const [allBooks, setAllBooks] = useState([])
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [author, setAuthor] = useState("")
  const [availability, setAvailability] = useState("")
  const [yearOfPublication, setYearOfPublication] = useState("")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true)
      const token = localStorage.getItem("token")
      try {
        const response = await axios.get("http://localhost:5000/api/books", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        setAllBooks(response.data.books)
        setBooks(response.data.books)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching books:", error)
        setLoading(false)
      }
    }

    fetchBooks()
  }, [])

  const handleSearch = () => {
    let filteredBooks = allBooks

    if (searchTerm) {
      filteredBooks = filteredBooks.filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    if (filterCategory) {
      filteredBooks = filteredBooks.filter((book) => book.category.toLowerCase() === filterCategory.toLowerCase())
    }

    if (author) {
      filteredBooks = filteredBooks.filter((book) => book.author.toLowerCase().includes(author.toLowerCase()))
    }

    if (availability) {
      filteredBooks = filteredBooks.filter((book) => book.availability.toLowerCase() === availability.toLowerCase())
    }

    if (yearOfPublication) {
      filteredBooks = filteredBooks.filter((book) => book.yearOfPublication.toString() === yearOfPublication)
    }

    setBooks(filteredBooks)
  }

  const clearFilters = () => {
    setSearchTerm("")
    setFilterCategory("")
    setAuthor("")
    setAvailability("")
    setYearOfPublication("")
    setBooks(allBooks)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8 ">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-4 md:mb-0">Discover Books</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 bg-white hover:bg-blue-50 text-blue-600 px-4 py-2 rounded-lg shadow-sm transition-all border border-blue-200"
              >
                <Filter size={18} />
                <span>{isFilterOpen ? "Hide Filters" : "Show Filters"}</span>
              </button>
              {(searchTerm || filterCategory || author || availability || yearOfPublication) && (
                <button
                  onClick={clearFilters}
                  className="bg-white hover:bg-red-50 text-red-600 px-4 py-2 rounded-lg shadow-sm transition-all border border-red-200"
                >
                  Clear All
                </button>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" size={18} />
                <input
                  type="text"
                  placeholder="Search for books..."
                  className="w-full pl-10 p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button
                className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm"
                onClick={handleSearch}
              >
                <Search size={18} />
                Search
              </button>
            </div>

            {isFilterOpen && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 pt-4 border-t border-blue-100">
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-blue-700 mb-2 flex items-center gap-1">
                    <Book size={16} />
                    Category
                  </label>
                  <select
                    className="p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none bg-white"
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                  >
                    <option value="">All Categories</option>
                    <option value="fiction">Fiction</option>
                    <option value="non-fiction">Non-Fiction</option>
                    <option value="mystery">Mystery</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="science">Science</option>
                    <option value="history">History</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-blue-700 mb-2 flex items-center gap-1">
                    <User size={16} />
                    Author
                  </label>
                  <input
                    type="text"
                    placeholder="Author name"
                    className="p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-blue-700 mb-2 flex items-center gap-1">
                    <CheckCircle size={16} />
                    Availability
                  </label>
                  <select
                    className="p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none bg-white"
                    value={availability}
                    onChange={(e) => setAvailability(e.target.value)}
                  >
                    <option value="">All</option>
                    <option value="available">Available</option>
                    <option value="unavailable">Unavailable</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-blue-700 mb-2 flex items-center gap-1">
                    <Calendar size={16} />
                    Year
                  </label>
                  <input
                    type="text"
                    placeholder="Year of Publication"
                    className="p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none"
                    value={yearOfPublication}
                    onChange={(e) => setYearOfPublication(e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader />
            </div>
          ) : books.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {books.map((book) => (
                <BookCard key={book._id} book={book} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl shadow-sm">
              <Book size={48} className="mx-auto text-blue-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No Books Found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchBooksPage

