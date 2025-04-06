import { ArrowUpRight, List, Tag, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function QuestionCard({ question }) {
  // Function to determine difficulty badge color
  const getDifficultyColor = () => {
    switch (question.difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Hard":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="group flex flex-col h-full overflow-hidden rounded-xl bg-white border border-blue-100 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex flex-col flex-grow p-5">
        {/* Question Title */}
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-blue-700 transition-colors">
            {question.question}
          </h2>
          <ArrowUpRight className="h-4 w-4 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Question Details */}
        <div className="mt-2 space-y-3">
          {/* Question Type */}
          <div className="flex items-center text-sm text-gray-700">
            <List className="h-4 w-4 mr-2 text-blue-500" />
            <span className="font-medium">{question.type}</span>
          </div>

          {/* Difficulty Level */}
          <div className="flex items-center text-sm text-gray-700">
            <Star className="h-4 w-4 mr-2 text-blue-500" />
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor()}`}>
              {question.difficulty}
            </span>
          </div>

          {/* Tags */}
          <div className="flex items-center text-sm text-gray-700 flex-wrap">
            <Tag className="h-4 w-4 mr-2 text-blue-500" />
            {question.tags.map((tag, index) => (
              <span key={index} className="mr-2 px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* Options (if MCQ) */}
          {question.type === "MCQ" && (
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700">Options:</p>
              <ul className="list-disc list-inside text-sm text-gray-600">
                {question.options.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Correct Answer */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700">Correct Answer:</p>
            <p className="text-sm text-gray-600">{question.answer}</p>
          </div>

          {/* Created At */}
          <div className="flex items-center text-sm text-gray-700">
            <span className="font-medium">Created:</span>
            <span className="ml-2 text-gray-600">
              {new Date(question.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}