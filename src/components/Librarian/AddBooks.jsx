// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const AddBooks = () => {
// //   const [formData, setFormData] = useState({
// //     title: '',
// //     author: '',
// //     isbn: '',
// //     category: '',
// //     description: '',
// //     yearOfPublication: '',
// //     quantity: 0,
// //     coverImageUrl: '', 
// //   });


// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const token = localStorage.getItem('token');
// //     try {
// //         // console.log(token);
// //       const response = await axios.post('http://localhost:5000/api/books',formData, {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         }}); 
// //       // console.log(response.data);
// //       alert(`!${formData.title} Book sucessfully added...`)
// //       setFormData({
// //         title: '',
// //         author: '',
// //         isbn: '',
// //         category: '',
// //         description: '',
// //         yearOfPublication: '',
// //         quantity: 0,
// //         coverImageUrl: '',
// //       });
// //     } catch (error) {
// //       console.error('Error adding book:', error);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="bg-white p-5 shadow-md rounded">
// //               <div className=" text-3xl flex items-end justify-center font-medium text-black mt-3">Add New Book</div>
// //       <div className="mb-4">
// //         <label className="block text-sm font-medium text-gray-700">Title</label>
// //         <input
// //           type="text"
// //           name="title"
// //           value={formData.title}
// //           onChange={handleChange}
// //           className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
// //           required
// //         />
// //       </div>
// //       <div className="mb-4">
// //         <label className="block text-sm font-medium text-gray-700">Author</label>
// //         <input
// //           type="text"
// //           name="author"
// //           value={formData.author}
// //           onChange={handleChange}
// //           className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
// //           required
// //         />
// //       </div>
// //       <div className="mb-4">
// //         <label className="block text-sm font-medium text-gray-700">ISBN</label>
// //         <input
// //           type="text"
// //           name="isbn"
// //           value={formData.isbn}
// //           onChange={handleChange}
// //           className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
// //           required
// //         />
// //       </div>
// //       <div className="mb-4">
// //         <label className="block text-sm font-medium text-gray-700">Category</label>
// //         <input
// //           type="text"
// //           name="category"
// //           value={formData.category}
// //           onChange={handleChange}
// //           className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
// //           required
// //         />
// //       </div>
// //       <div className="mb-4">
// //         <label className="block text-sm font-medium text-gray-700">Description</label>
// //         <textarea
// //           name="description"
// //           value={formData.description}
// //           onChange={handleChange}
// //           className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
// //           required
// //         />
// //       </div>
// //       <div className="mb-4">
// //         <label className="block text-sm font-medium text-gray-700">Year of Publication</label>
// //         <input
// //           type="number"
// //           name="yearOfPublication"
// //           value={formData.yearOfPublication}
// //           onChange={handleChange}
// //           className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
// //           required
// //         />
// //       </div>
// //       <div className="mb-4">
// //         <label className="block text-sm font-medium text-gray-700">Quantity</label>
// //         <input
// //           type="number"
// //           name="quantity"
// //           value={formData.quantity}
// //           onChange={handleChange}
// //           className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
// //           required
// //         />
// //       </div>
// //       <div className="mb-4">
// //         <label className="block text-sm font-medium text-gray-700">Cover Image URL</label>
// //         <input
// //           type="text"
// //           name="coverImageUrl"
// //           value={formData.coverImageUrl}
// //           onChange={handleChange}
// //           className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
// //         />
// //       </div>
// //       <button
// //         type="submit"
// //         className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
// //       >
// //         Add Book
// //       </button>
// //     </form>
// //   );
// // };

// // export default AddBooks;
// import React, { useState } from 'react';
// import axios from 'axios';

// const AddBooks = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     author: '',
//     isbn: '',
//     category: '',
//     description: '',
//     yearOfPublication: '',
//     quantity: 0,
//     coverImageUrl: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('token');
//     try {
//       const response = await axios.post('http://localhost:5000/api/books', formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       alert(`!${formData.title} Book successfully added...`);
//       setFormData({
//         title: '',
//         author: '',
//         isbn: '',
//         category: '',
//         description: '',
//         yearOfPublication: '',
//         quantity: 0,
//         coverImageUrl: '',
//       });
//     } catch (error) {
//       console.error('Error adding book:', error);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
//       <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
//         <h2 className="text-3xl font-semibold text-blue-600 mb-6 text-center">Add New Book</h2>
//         <div className="space-y-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
//             <input
//               type="text"
//               name="author"
//               value={formData.author}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">ISBN</label>
//             <input
//               type="text"
//               name="isbn"
//               value={formData.isbn}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
//             <input
//               type="text"
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
//               rows="4"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Year of Publication</label>
//             <input
//               type="number"
//               name="yearOfPublication"
//               value={formData.yearOfPublication}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
//             <input
//               type="number"
//               name="quantity"
//               value={formData.quantity}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image URL</label>
//             <input
//               type="text"
//               name="coverImageUrl"
//               value={formData.coverImageUrl}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
//             />
//           </div>
//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
//             >
//               Add Book
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddBooks;
import React, { useState } from 'react';
import axios from 'axios';

const AddBooks = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: '',
    category: '',
    description: '',
    yearOfPublication: '',
    quantity: 0,
    coverImageUrl: '',
    pdf: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      pdf: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await axios.post('http://localhost:5000/api/books', data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      alert(`!${formData.title} Book successfully added...`);
      setFormData({
        title: '',
        author: '',
        isbn: '',
        category: '',
        description: '',
        yearOfPublication: '',
        quantity: 0,
        coverImageUrl: '',
        pdf: null,
      });
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-semibold text-blue-600 mb-6 text-center">Add New Book</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ISBN</label>
            <input
              type="text"
              name="isbn"
              value={formData.isbn}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              rows="4"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Year of Publication</label>
            <input
              type="number"
              name="yearOfPublication"
              value={formData.yearOfPublication}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image URL</label>
            <input
              type="text"
              name="coverImageUrl"
              value={formData.coverImageUrl}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">PDF File</label>
            <input
              type="file"
              name="pdf"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
            >
              Add Book
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBooks;