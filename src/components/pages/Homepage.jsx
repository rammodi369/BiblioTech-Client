// import React from 'react'
// import Upcoming from '../components/latestBooks'
// import BooksList from '../components/BookList'


// function Homepage() {
//   return (
//     <div>
//         <Upcoming/>
//         <BooksList/>
//     </div>
//   )
// }

// export default Homepage
import { BookOpen, Users, BookMarked, HelpCircle } from "lucide-react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const educationalResources = [
  {
    id: 1,
    title: "Introduction to Programming",
    description: "A comprehensive guide to the basics of programming. Perfect for beginners who want to understand the core concepts and start coding.",
    imageUrl: "https://f.hubspotusercontent10.net/hubfs/6448316/web-programming-languages.jpg",
    link: "https://example.com/learn-programming"
  },
  {
    id: 2,
    title: "Data Science Fundamentals",
    description: "An introductory course on data science. Learn about data analysis, statistics, and machine learning algorithms.",
    imageUrl: "https://images.squarespace-cdn.com/content/v1/5fce63270356d927d7eecdbd/89c1661a-34a4-4a13-82f8-37e8fc667934/DATA-.jpeg",
    link: "https://example.com/data-science"
  },
  {
    id: 3,
    title: "Web Development Bootcamp",
    description: "An all-in-one bootcamp to help you build modern websites using HTML, CSS, JavaScript, and more.",
    imageUrl: "https://i.ytimg.com/vi/G10vMyRj8Aw/maxresdefault.jpg",
     link: "https://example.com/web-development"
  },
];
function Homepage() {
  return (
  
      <div className="min-h-screen flex flex-col">
       
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-white to-blue-50 py-20">
            <div className="container px-4 mx-auto text-center max-w-3xl">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                Digital Learning Resources at Your Fingertips
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Access a vast collection of instructional materials, Q&A banks, and educational resources 24/7 from anywhere.
              </p>
              <div className="mt-10">
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg">Explore Resources</button>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20">
            <div className="container px-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <BookOpen className="h-10 w-10 text-blue-600" />, title: "Digital Library", desc: "Access thousands of digital resources anytime, anywhere" },
                { icon: <Users className="h-10 w-10 text-blue-600" />, title: "Multiple Users", desc: "Share resources simultaneously with other learners" },
                { icon: <BookMarked className="h-10 w-10 text-blue-600" />, title: "Study Materials", desc: "Comprehensive collection of instructional materials" },
                { icon: <HelpCircle className="h-10 w-10 text-blue-600" />, title: "Q&A Bank", desc: "Extensive question and answer bank for practice" },
              ].map((feature, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-sm border text-center">
                  {feature.icon}
                  <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Resources Section */}
          <section className="py-20 bg-gray-50">
            <div className="container px-4 mx-auto text-center">
              <h2 className="text-3xl font-bold mb-12">Featured Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {educationalResources.map((item) => (
        <div key={item.id} className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <img src={item.imageUrl} alt={item.title} className="aspect-video bg-gray-100 object-cover" />
          <div className="p-6">
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button className="text-blue-600 hover:text-blue-500 border border-blue-600 px-4 py-2 rounded-lg">
                Learn More
              </button>
            </a>
          </div>
        </div>
      ))}
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
       
      </div>
    
  );
}
export default Homepage