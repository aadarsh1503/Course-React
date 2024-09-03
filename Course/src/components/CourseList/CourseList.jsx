import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineBook, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';
import { FaCircle, FaTachometerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function CourseList() {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Simulated API call with additional courses
    const dummyCourses = [
      // Add your courses here
      {
        id: 1,
        name: "Introduction to React Native",
        instructor: "John Doe",
        thumbnail: "https://www.shutterstock.com/image-photo/elearning-education-internet-lessons-online-600nw-2158034833.jpg",
        enrollmentStatus: "Open"
      },
      {
        id: 2,
        name: "Advanced JavaScript",
        instructor: "Jane Smith",
        thumbnail: "https://media.istockphoto.com/id/1353769234/photo/training-and-skill-development-concept-with-icons-of-online-course-conference-seminar-webinar.jpg?b=1&s=612x612&w=0&k=20&c=1HIqyEn7_T6-WMcNGxdv9CN45tb_FUp-eqZf9kG6G8A=",
        enrollmentStatus: "In Progress"
      },
      {
        id: 3,
        name: "Data Structures & Algorithms",
        instructor: "Alice Johnson",
        thumbnail: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww",
        enrollmentStatus: "Closed"
      },
      {
        id: 4,
        name: "Machine Learning Basics",
        instructor: "Bob Martin",
        thumbnail: "https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=jlYes8ZfnCmD0lLn-vKvzQoKXrWaEcVypHnB5MuO-g8=",
        enrollmentStatus: "Open"
      },
      {
        id: 5,
        name: "Web Development with Django",
        instructor: "Clara Lewis",
        thumbnail: "https://c8.alamy.com/comp/2DEDDK2/web-design-inscription-against-laptop-and-code-background-learn-web-design-computer-courses-training-2DEDDK2.jpg",
        enrollmentStatus: "In Progress"
      },
      {
        id: 6,
        name: "Cloud Computing Essentials",
        instructor: "Ethan Brown",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwQ0trsPU-Dr2FKqxjsqJgm8W6Uj-GDO_vKg&s",
        enrollmentStatus: "Open"
      },
      {
        id: 7,
        name: "Introduction to Cybersecurity",
        instructor: "Sara Green",
        thumbnail: "https://www.hubspot.com/hubfs/how-to-start-coding-1.jpg",
        enrollmentStatus: "Closed"
      },
      {
        id: 8,
        name: "Blockchain Development",
        instructor: "Tom Hardy",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWY6-voP4ZJqKehvTBgX2ZCcM1VT3c2IC-kQ&s",
        enrollmentStatus: "Open"
      },
      {
        id: 9,
        name: "Mobile App Development",
        instructor: "Emily Clark",
        thumbnail: "https://www.apu.apus.edu/images/site/cards/coding-skills-apu.jpg",
        enrollmentStatus: "In Progress"
    }
      // Add more courses as needed
    ];
    setCourses(dummyCourses);
  }, []);

  const statusStyles = {
    Open: "bg-green-200 text-green-800",
    'In Progress': "bg-yellow-200 text-yellow-800",
    Closed: "bg-red-200 text-red-800"
  };

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative p-8">
      {/* Sexy Button */}
      <Link to="/dashboard">
        <motion.button
          className="absolute top-5 right-5 bg-black text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105 hover:bg-gray-800 flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaTachometerAlt className="mr-2" /> Go to Dashboard
        </motion.button>
      </Link>

      <h1 className="text-5xl font-serif mt-10  font-extrabold text-center mb-8 text-gray-900">Available Courses</h1>
      
      <div className="mb-8 flex justify-center">
        <div className="relative w-full md:w-1/2 lg:w-1/3">
          <input
            type="text"
            placeholder="Search by course or instructor"
            className="border p-4 pr-10 w-full text-black rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform duration-300 ease-in-out"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <AiOutlineSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-600" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <Link to={`/course/${course.id}`}>
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
                <img
                  src={course.thumbnail}
                  alt={course.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-2xl font-semibold flex items-center mb-2">
                  <AiOutlineBook className="mr-2 text-blue-600" /> {course.name}
                </h2>
                <p className="text-lg flex items-center mb-2">
                  <AiOutlineUser className="mr-2 text-gray-600" /> Instructor: {course.instructor}
                </p>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusStyles[course.enrollmentStatus]}`}>
                  <FaCircle className={`mr-2 ${statusStyles[course.enrollmentStatus]}`} />
                  {course.enrollmentStatus}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
