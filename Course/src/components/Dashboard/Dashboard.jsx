import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaCalendarAlt, FaUserAlt, FaCheckCircle } from 'react-icons/fa';

const enrolledCourses = [
  {
    id: 1,
    name: "Introduction to React Native",
    instructor: "John Doe",
    dueDate: "2024-09-30",
    progress: 75,
    thumbnail: "https://www.aalavai.com/uploads/posts/1647938450ReactNativeFeaturedImage.png"
  },
  {
    id: 2,
    name: "Advanced JavaScript",
    instructor: "Jane Smith",
    dueDate: "2024-10-15",
    progress: 50,
    thumbnail: "https://blog.talent500.co/wp-content/uploads/2023/01/Skills-you-need-to-get-a-job-as-a-JavaScript-developer-1.png"
  },
  {
    id: 3,
    name: "Web Development Bootcamp",
    instructor: "Alice Johnson",
    dueDate: "2024-11-05",
    progress: 40,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjukhloxWLT9iMSdNB11_E3UYrTeSNqhv-nQ&s"
  },
  {
    id: 4,
    name: "Introduction to Machine Learning",
    instructor: "Bob Brown",
    dueDate: "2024-12-20",
    progress: 65,
    thumbnail: "https://www.shutterstock.com/image-photo/elearning-education-internet-lessons-online-600nw-2158034833.jpg"
  },
];

export default function Dashboard() {
  const [courses, setCourses] = useState(enrolledCourses);
  const [completedCourses, setCompletedCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const markComplete = (id) => {
    setCourses(courses.map(course =>
      course.id === id ? { ...course, progress: 100 } : course
    ));
    setCompletedCourses([...completedCourses, id]);
  };

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-100">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <h1 className="text-4xl font-serif font-extrabold text-gray-800 mb-4 md:mb-0">My Enrolled Courses</h1>
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search Courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pl-10 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
          />
          <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
          <motion.div
            key={course.id}
            className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={course.thumbnail}
              alt={course.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{course.name}</h2>
            <p className="mb-1 flex items-center text-sm"><FaUserAlt className="mr-2" />Instructor: {course.instructor}</p>
            <p className="mb-4 flex items-center text-sm"><FaCalendarAlt className="mr-2" />Due Date: {course.dueDate}</p>
            <div className="relative mb-4">
              <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                <motion.div
                  className="h-3 bg-green-500 rounded-full"
                  style={{ width: `${course.progress}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${course.progress}%` }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                  {course.progress}%
                </div>
              </div>
            </div>
            <button
              onClick={() => markComplete(course.id)}
              disabled={completedCourses.includes(course.id)}
              className={`w-full py-2 px-4 text-white font-bold rounded-lg shadow-lg transition-transform duration-300 transform ${
                completedCourses.includes(course.id) ? 'bg-green-600 cursor-not-allowed' : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-105'
              }`}
            >
              {completedCourses.includes(course.id) ? (
                <><FaCheckCircle className="inline mr-2" /> Completed</>
              ) : (
                "Mark as Complete"
              )}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
