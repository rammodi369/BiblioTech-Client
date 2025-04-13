import React, { useState } from "react";
import axios from "axios";

const AddStudyMaterial = () => {
  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    description: "",
    Category: "",
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
    const token = localStorage.getItem("token");
    const data = new FormData();

    data.append("title", formData.title);
    data.append("subject", formData.subject);
    data.append("description", formData.description);
    data.append("Category", formData.Category);
    data.append("file", formData.pdf); // must match the multer `.single('file')`

    try {
      const response = await axios.post(
        "http://localhost:5000/api/material",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(`✅ "${formData.title}" material uploaded successfully!`);
      setFormData({
        title: "",
        subject: "",
        description: "",
        Category: "",
        pdf: null,
      });
    } catch (error) {
      console.error("Error uploading material:", error);
      alert("❌ Failed to upload study material");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-green-50 to-white p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl"
      >
        <h2 className="text-3xl font-semibold text-green-600 mb-6 text-center">
          Upload Study Material
        </h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              name="Category"
              value={formData.Category}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
              required
            >
              <option value="">Select a category</option>
              <option value="notes">Notes</option>
              <option value="assignments">Assignments</option>
              <option value="previous-papers">Previous Papers</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload File
            </label>
            <input
              type="file"
              name="pdf"
              accept=".pdf,.doc,.docx,.ppt,.pptx,.zip"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-200"
            >
              Upload Material
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddStudyMaterial;
