// import React from 'react'
// import { ArrowUpRight } from 'lucide-react'
// import { Link } from 'react-router-dom';

// export default function BookCard({ book }) {
//   return (
//     <Link to={`/api/books/${book._id}`} className="w-[300px]  rounded-md border shadow-2xl">
//       <img
//         src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
//         alt="Laptop"
//         className="h-[150px] w-full rounded-t-md object-cover"
//       />
//       <div className="p-4">
//         <h1 className="inline-flex items-center text-lg font-semibold">
//          {book.title} &nbsp; <ArrowUpRight className="h-4 w-4" />
//         </h1>
//         <p className="mt-3 text-sm text-gray-600 ">
//           <p className='max-h-[80px] h-[80px] overflow-auto'>{book.description}</p>
//          <br/>
//          <div className=' font-semibold text-gray-900 mt-3'>
//          YOE : {book.yearOfPublication} 
//          </div>
//         </p>
//         <div className="mt-4">
//           <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
//             #{book.category}
//           </span>
//         </div>
//         <button
//           type="button"
//           className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//         >
//           Read
//         </button>
//       </div>
//     </Link>
//   );
// }
import { ArrowUpRight, BookOpen, Calendar, Tag } from "lucide-react"
import { Link } from "react-router-dom"

export default function BookCard({ book }) {
  // Function to determine availability badge color
  const getAvailabilityColor = () => {
    return book.availability === "available" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
  }

  return (
    <Link
      to={`/api/books/${book._id}`}
      className="group flex flex-col h-full overflow-hidden rounded-xl bg-white border border-blue-100 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="relative">
      {book.coverImageUrl ? (
  <img
    src={book.coverImageUrl}
    alt={book.title}
    className="h-[180px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
  />
) : (
  <div className="h-[180px] w-full flex items-center justify-center ">
    <BookOpen className="h-[150px] w-full text-blue-500" />
  </div>
)}
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAvailabilityColor()}`}>
            {book.availability}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-grow p-5">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-blue-700 transition-colors">
            {book.title}
          </h2>
          <ArrowUpRight className="h-4 w-4 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <p className="text-sm text-gray-600 mb-3 line-clamp-3 flex-grow">{book.description}</p>

        <div className="mt-auto space-y-3">
          <div className="flex items-center text-sm text-gray-700">
            <Calendar className="h-4 w-4 mr-2 text-blue-500" />
            <span className="font-medium">{book.yearOfPublication}</span>
          </div>

          <div className="flex items-center text-sm text-gray-700">
            <Tag className="h-4 w-4 mr-2 text-blue-500" />
            <span className="font-medium capitalize">{book.category}</span>
          </div>

          <div className="pt-3 border-t border-gray-100">
            <button
              type="button"
              className="w-full rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <BookOpen className="h-4 w-4" />
              Read Book
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

