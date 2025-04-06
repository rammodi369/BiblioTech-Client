import axios from 'axios';
import React, { useState } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    subject: '',
    message: '',
  });
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const token = localStorage.getItem('token'); 

    try {
      const response = await axios.post('http://localhost:5000/api/feedback', formData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, 
        },
      });

      if (response.status === 201) {
        alert('Feedback submitted successfully!');
        setFormData({
          subject: '',
          message: '',
        });
        // console.log(response);
      } else {
        throw new Error('Failed to submit feedback');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Failed to submit feedback. Please try again later.');
    }
  };

  return (
    <div className="max-w-2xl w-[50vw] mx-auto mt-40 mb-20 p-6 bg-white shadow-md rounded-md">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold mb-4 text-center">Contact Us</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Have questions or need help? Reach out to us!
      </p>
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold">Feedback Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
  
};

export default FeedbackForm;
