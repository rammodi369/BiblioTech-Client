import React, { useState } from 'react';
import axios from 'axios';

const AddQuestion = () => {
  const [questionData, setQuestionData] = useState({
    question: '',
    type: 'MCQ',
    difficulty: 'Easy',
    tags: '',
    options: ['', ''], // Default 2 options for MCQ
    answer: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuestionData({ ...questionData, [name]: value });
  };

  const handleTagsChange = (e) => {
    setQuestionData({ ...questionData, tags: e.target.value });
  };

  const handleOptionsChange = (index, value) => {
    const newOptions = [...questionData.options];
    newOptions[index] = value;
    setQuestionData({ ...questionData, options: newOptions });
  };

  const addOption = () => {
    setQuestionData({ ...questionData, options: [...questionData.options, ''] });
  };

  const removeOption = (index) => {
    const newOptions = questionData.options.filter((_, i) => i !== index);
    setQuestionData({ ...questionData, options: newOptions });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
        await axios.post('http://localhost:5000/api/questions', {
            ...questionData,
            tags: questionData.tags.split(',').map((tag) => tag.trim()), // Convert tags string to array
          }, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
      alert('Question added successfully!');
      setQuestionData({
        question: '',
        type: 'MCQ',
        difficulty: 'Easy',
        tags: '',
        options: ['', ''],
        answer: '',
      });
    } catch (error) {
      console.error('Failed to add question', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Add Question</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Question Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Question</label>
            <input
              type="text"
              name="question"
              placeholder="Enter question"
              value={questionData.question}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              required
            />
          </div>

          {/* Type Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
            <select
              name="type"
              value={questionData.type}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            >
              <option value="MCQ">MCQ</option>
              <option value="True/False">True/False</option>
              <option value="Descriptive">Descriptive</option>
            </select>
          </div>

          {/* Difficulty Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
            <select
              name="difficulty"
              value={questionData.difficulty}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          {/* Tags Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tags (comma-separated)</label>
            <input
              type="text"
              name="tags"
              placeholder="e.g., Math, Science"
              value={questionData.tags}
              onChange={handleTagsChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            />
          </div>

          {/* Options for MCQ */}
          {questionData.type === 'MCQ' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Options</label>
              {questionData.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <input
                    type="text"
                    placeholder={`Option ${index + 1}`}
                    value={option}
                    onChange={(e) => handleOptionsChange(index, e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                    required
                  />
                  {questionData.options.length > 2 && (
                    <button
                      type="button"
                      onClick={() => removeOption(index)}
                      className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-200"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addOption}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
              >
                Add Option
              </button>
            </div>
          )}

          {/* Correct Answer Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Correct Answer</label>
            <input
              type="text"
              name="answer"
              placeholder="Enter correct answer"
              value={questionData.answer}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
            >
              Add Question
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddQuestion;