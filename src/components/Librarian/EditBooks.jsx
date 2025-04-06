// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useSelector } from 'react-redux';

// const EditBook = () => {
//   const { bookId } = useParams();
//   const navigate = useNavigate();
//   const token = useSelector((state) => state.user.token);
//   const [book, setBook] = useState({
//     title: '',
//     author: '',
//     quantity: 0,
//     availability: '',
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchBook = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/books/${bookId}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setBook(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError('Failed to fetch book details');
//         setLoading(false);
//       }
//     };

//     fetchBook();
//   }, [bookId, token]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setBook((prevBook) => ({
//       ...prevBook,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`http://localhost:5000/api/books/${bookId}`, book, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       navigate('/librarian/edit-books'); 
//     alert("! Book updated sucessfully..")
//     } catch (error) {
//       setError('Failed to update book details');
//     }
//   };
//   const handleDelete = async () => {
//     if (window.confirm('Are you sure you want to delete this book?')) {
//       try {
//         await axios.delete(`http://localhost:5000/api/books/${bookId}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         navigate('/librarian/edit-books'); 
//         alert("! Book deleted sucessfully..")
//       } catch (error) {
//         setError('Failed to delete book');
//         console.log(error);
//       }
//     }
//   };


//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-semibold mb-6">Edit Book</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
//           <input
//             type="text"
//             name="title"
//             value={book.title}
//             onChange={handleChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Author</label>
//           <input
//             type="text"
//             name="author"
//             value={book.author}
//             onChange={handleChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Quantity</label>
//           <input
//             type="number"
//             name="quantity"
//             value={book.quantity}
//             onChange={handleChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Availability</label>
//           <input
//             type="text"
//             name="availability"
//             value={book.availability}
//             onChange={handleChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           />
//         </div>
//          <div className='flex justify-between'>
//          <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Save Changes
//         </button>
//         <button
//           type="button"
//           onClick={handleDelete}
//           className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
//         >
//           Delete Book
//         </button>
//          </div>
//       </form>
//     </div>
//   );
// };

// export default EditBook;
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

const EditBook = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);
  const [book, setBook] = useState({
    title: '',
    author: '',
    quantity: 0,
    availability: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/books/${bookId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBook(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch book details');
        setLoading(false);
      }
    };

    fetchBook();
  }, [bookId, token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/books/${bookId}`, book, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate('/librarian/edit-books');
      alert('! Book updated successfully..');
    } catch (error) {
      setError('Failed to update book details');
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      try {
        await axios.delete(`http://localhost:5000/api/books/${bookId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        navigate('/librarian/edit-books');
        alert('! Book deleted successfully..');
      } catch (error) {
        setError('Failed to delete book');
        console.log(error);
      }
    }
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-600">{error}</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Edit Book</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={book.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Author</label>
            <input
              type="text"
              name="author"
              value={book.author}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={book.quantity}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
            <input
              type="text"
              name="availability"
              value={book.availability}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-200"
            >
              Delete Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBook;