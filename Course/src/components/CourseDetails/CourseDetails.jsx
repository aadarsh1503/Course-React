import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar, FaClock, FaGlobe, FaUserAlt, FaGraduationCap, FaCode, FaMobileAlt, FaDatabase, FaRobot, FaArrowLeft } from 'react-icons/fa';
import { FiTag } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { GiPencilRuler, GiBookshelf, GiCheckMark } from 'react-icons/gi';

const courses = [
    {
        id: 1,
        name: "Introduction to React Native",
        instructor: "John Doe",
        description: "Learn the basics of React Native development and build your first mobile app. This course covers the fundamental concepts of React Native and helps you develop a simple mobile application by the end of the course.",
        enrollmentStatus: "Open",
        duration: "8 weeks",
        schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
        location: "Online",
        prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
        syllabus: [
          { week: 1, topic: "Introduction to React Native" },
          { week: 2, topic: "Setting up Development Environment" },
          { week: 3, topic: "Building UI Components" },
          { week: 4, topic: "State Management in React Native" },
          { week: 5, topic: "Handling Navigation" },
          { week: 6, topic: "Integrating APIs" },
          { week: 7, topic: "Debugging and Performance Optimization" },
          { week: 8, topic: "Final Project Development" },
        ],
      },
      {
        id: 2,
        name: "Advanced JavaScript",
        instructor: "Jane Smith",
        description: "Deep dive into advanced JavaScript topics such as closures, promises, async/await, and modern ES6+ features. Master these concepts to write efficient and clean code.",
        enrollmentStatus: "In Progress",
        duration: "6 weeks",
        schedule: "Mondays and Wednesdays, 4:00 PM - 6:00 PM",
        location: "Online",
        prerequisites: ["Basic JavaScript knowledge"],
        syllabus: [
          { week: 1, topic: "Closures and Scope" },
          { week: 2, topic: "Promises and Async/Await" },
          { week: 3, topic: "ES6+ Features" },
          { week: 4, topic: "Object-Oriented JavaScript" },
          { week: 5, topic: "Error Handling and Debugging" },
          { week: 6, topic: "Advanced DOM Manipulation" },
        ],
      },
      {
        id: 3,
        name: "Data Structures & Algorithms",
        instructor: "Alice Johnson",
        description: "Master the fundamental data structures and algorithms for efficient problem-solving. This course covers arrays, linked lists, stacks, queues, sorting algorithms, and more.",
        enrollmentStatus: "Closed",
        duration: "10 weeks",
        schedule: "Fridays, 5:00 PM - 8:00 PM",
        location: "In-Person, Room 304",
        prerequisites: ["Basic programming knowledge"],
        syllabus: [
          { week: 1, topic: "Introduction to Data Structures" },
          { week: 2, topic: "Arrays and Linked Lists" },
          { week: 3, topic: "Stacks and Queues" },
          { week: 4, topic: "Trees and Graphs" },
          { week: 5, topic: "Sorting Algorithms" },
          { week: 6, topic: "Dynamic Programming" },
          { week: 7, topic: "Greedy Algorithms" },
          { week: 8, topic: "Recursion and Backtracking" },
          { week: 9, topic: "Graph Traversal Algorithms" },
          { week: 10, topic: "Final Project and Evaluation" },
        ],
      },
      {
        id: 4,
        name: "Machine Learning Basics",
        instructor: "Bob Martin",
        description: "Learn the fundamental concepts of machine learning, including supervised and unsupervised learning, regression, classification, and neural networks. Build your first machine learning models.",
        enrollmentStatus: "Open",
        duration: "12 weeks",
        schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
        location: "Online",
        prerequisites: ["Basic Python programming", "Mathematics (Linear Algebra, Probability)"],
        syllabus: [
          { week: 1, topic: "Introduction to Machine Learning" },
          { week: 2, topic: "Supervised vs Unsupervised Learning" },
          { week: 3, topic: "Regression Models" },
          { week: 4, topic: "Classification Models" },
          { week: 5, topic: "Decision Trees and Random Forests" },
          { week: 6, topic: "Neural Networks" },
          { week: 7, topic: "Model Evaluation Techniques" },
          { week: 8, topic: "Feature Engineering" },
          { week: 9, topic: "Overfitting and Regularization" },
          { week: 10, topic: "Unsupervised Learning Techniques" },
          { week: 11, topic: "Dimensionality Reduction" },
          { week: 12, topic: "Final Project: Build a Machine Learning Model" },
        ],
      },
      {
        id: 5,
        name: "Web Development with Django",
        instructor: "Clara Lewis",
        description: "Build powerful web applications with Django, a Python-based web framework. Learn how to structure your projects, work with databases, and create dynamic web applications.",
        enrollmentStatus: "In Progress",
        duration: "8 weeks",
        schedule: "Mondays and Wednesdays, 2:00 PM - 4:00 PM",
        location: "Online",
        prerequisites: ["Basic Python programming", "Basic HTML/CSS knowledge"],
        syllabus: [
          { week: 1, topic: "Introduction to Django" },
          { week: 2, topic: "Setting up Django Projects" },
          { week: 3, topic: "Django Models and Migrations" },
          { week: 4, topic: "Django Views and Templates" },
          { week: 5, topic: "Working with Forms and Models" },
          { week: 6, topic: "User Authentication and Security" },
          { week: 7, topic: "Deploying Django Applications" },
          { week: 8, topic: "Final Project: Build a Web Application" },
        ],
      },
      {
        id: 6,
        name: "Cloud Computing Essentials",
        instructor: "Ethan Brown",
        description: "Explore the core concepts of cloud computing, including Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). Get hands-on experience with cloud platforms.",
        enrollmentStatus: "Open",
        duration: "6 weeks",
        schedule: "Wednesdays, 4:00 PM - 6:00 PM",
        location: "Online",
        prerequisites: ["Basic networking knowledge"],
        syllabus: [
          { week: 1, topic: "Introduction to Cloud Computing" },
          { week: 2, topic: "Virtualization and Cloud Models" },
          { week: 3, topic: "Cloud Platforms: AWS, Azure, GCP" },
          { week: 4, topic: "Building Scalable Applications" },
          { week: 5, topic: "Security in the Cloud" },
          { week: 6, topic: "Final Project: Deploying Cloud Applications" },
        ],
      },
      {
        id: 7,
        name: "Introduction to Cybersecurity",
        instructor: "Sara Green",
        description: "Learn the basic principles of cybersecurity, including network security, cryptography, risk management, and best practices for securing digital assets.",
        enrollmentStatus: "Closed",
        duration: "8 weeks",
        schedule: "Fridays, 3:00 PM - 5:00 PM",
        location: "In-Person, Room 205",
        prerequisites: ["Basic networking knowledge", "Understanding of Operating Systems"],
        syllabus: [
          { week: 1, topic: "Introduction to Cybersecurity" },
          { week: 2, topic: "Threats and Vulnerabilities" },
          { week: 3, topic: "Network Security" },
          { week: 4, topic: "Cryptography" },
          { week: 5, topic: "Security Operations" },
          { week: 6, topic: "Incident Response" },
          { week: 7, topic: "Risk Management" },
          { week: 8, topic: "Final Project: Implementing Security Solutions" },
        ],
      },
      {
        id: 8,
        name: "Blockchain Development",
        instructor: "Tom Hardy",
        description: "Dive into the world of blockchain technology, learn the basics of decentralized networks, smart contracts, and build your own blockchain applications.",
        enrollmentStatus: "Open",
        duration: "10 weeks",
        schedule: "Tuesdays, 5:00 PM - 7:00 PM",
        location: "Online",
        prerequisites: ["Basic programming knowledge", "Understanding of cryptography"],
        syllabus: [
          { week: 1, topic: "Introduction to Blockchain" },
          { week: 2, topic: "Cryptographic Foundations" },
          { week: 3, topic: "Decentralized Networks" },
          { week: 4, topic: "Smart Contracts" },
          { week: 5, topic: "Blockchain Development Tools" },
          { week: 6, topic: "Building Decentralized Applications (DApps)" },
          { week: 7, topic: "Security and Privacy in Blockchain" },
          { week: 8, topic: "Scalability in Blockchain" },
          { week: 9, topic: "Real-World Blockchain Applications" },
          { week: 10, topic: "Final Project: Build a Blockchain Application" },
        ],
      },
      {
        id: 9,
        name: "Mobile App Development",
        instructor: "Emily Clark",
        description: "Master the skills needed to develop mobile applications using popular frameworks like React Native and Flutter. Learn how to design, build, and deploy mobile apps on both Android and iOS platforms.",
        enrollmentStatus: "In Progress",
        duration: "12 weeks",
        schedule: "Thursdays, 2:00 PM - 4:00 PM",
        location: "Online",
        prerequisites: ["Basic programming knowledge", "Familiarity with mobile development concepts"],
        syllabus: [
          { week: 1, topic: "Introduction to Mobile App Development" },
          { week: 2, topic: "Setting up Development Environment" },
          { week: 3, topic: "Building UI Components" },
          { week: 4, topic: "State Management" },
          { week: 5, topic: "Navigation in Mobile Apps" },
          { week: 6, topic: "APIs and Data Fetching" },
          { week: 7, topic: "Handling Mobile-Specific Features" },
          { week: 8, topic: "Publishing Apps to App Stores" },
          { week: 9, topic: "Testing and Debugging" },
          { week: 10, topic: "Deploying Apps to Production" },
          { week: 11, topic: "Performance Optimization" },
          { week: 12, topic: "Final Project: Build a Mobile Application" },
  ],
}
];

export default function CourseDetails() {
    const navigate = useNavigate();
    const { courseId } = useParams();
    const course = courses.find((c) => c.id === parseInt(courseId));

    if (!course) {
      return (
        <div className="text-center mt-10">
          <h1 className="text-2xl font-bold">Course not found</h1>
          <button 
              onClick={() => navigate('/')} 
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
              Go to Home
          </button>
        </div>
      );
    }

    const handleBack = () => {
      navigate(-1);
    };

    return (
      <div className="relative">
        {/* Back Icon */}
        <button 
            onClick={handleBack} 
            className="absolute top-4 left-4 p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
        >
            <FaArrowLeft size={24} />Back
        </button>
        <div className="container mt-10 mx-auto p-6">
          {/* Course Information */}
          <div
            className="flex flex-col md:flex-row justify-between items-start bg-gray-900 text-white p-6 rounded-lg shadow-lg"
            style={{ backgroundImage: `url('https://c4.wallpaperflare.com/wallpaper/944/995/821/abstract-backgrounds-minimalistic-website-wallpaper-preview.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            {/* Left Side - Course Info */}
            <div className="flex-1 mb-6 md:mb-0">
              <h1 className="text-3xl font-bold mb-2">{course.name}</h1>
              <p className="text-lg mb-4 text-white font-semibold">{course.description}</p>
              <div className="flex items-center mb-2">
                <FaStar className="text-yellow-500 mr-1" />
                <span className="text-yellow-400 text-lg">4.5</span>
                <span className="ml-2">(9,912 ratings)</span>
                <span className="ml-4">482,153 students</span>
              </div>
              <div className="text-gray-400">
                <FaUserAlt className="inline-block mr-2" /> Created by {course.instructor}
              </div>
              <div className="text-gray-400 mt-2">
                <FaGlobe className="inline-block mr-2" /> {course.location}
              </div>
              <div className="text-gray-400 mt-2">
                <FaClock className="inline-block mr-2" /> {course.duration}
              </div>
              <div className="text-gray-400 mt-2">
                Schedule: {course.schedule}
              </div>
              <div className="text-gray-400 mt-2">
                Enrollment Status: <span className={`font-bold ${course.enrollmentStatus === 'Open' ? 'text-green-500' : 'text-red-500'}`}>{course.enrollmentStatus}</span>
              </div>
            </div>

            {/* Right Side - Pricing and Buttons */}
            <div className={`flex flex-col items-center p-6 rounded-lg shadow-lg ${course.enrollmentStatus === 'Closed' ? 'bg-gray-500 text-white' : 'bg-gradient-to-br from-purple-600 to-pink-500 text-white'}`}>
              {course.enrollmentStatus === 'Closed' ? (
                <>
                  <h2 className="text-2xl font-bold mb-4">₹449</h2>
                  <span className="line-through mb-2">₹3,099</span>
                  <p className="mb-4">Notify me when the course is available</p>
                  <button className="bg-white text-purple-800 hover:bg-purple-200 text-lg px-6 py-2 rounded-lg font-bold transition duration-300">
                    Notify Me
                  </button>
                </>
              ) : (
                <>
                  <h2 className="text-4xl font-bold mb-4">₹449</h2>
                  <span className="line-through mb-2">₹3,099</span>
                  <div className="flex items-center mb-4">
                    <FiTag className="mr-2" /> 86% off
                  </div>
                  <div className="flex items-center mb-4">
                    <FaClock className="mr-2" /> 5 hours left at this price!
                  </div>
                  <button className="bg-purple-800 hover:bg-purple-900 text-lg px-6 py-2 rounded-lg font-bold transition duration-300">
                    Buy Now
                  </button>
                  <button className="bg-white text-purple-800 hover:bg-purple-200 text-lg px-6 py-2 mt-2 rounded-lg font-bold transition duration-300">
                    Apply Coupon
                  </button>
                </>
              )}
            </div>
          </div>

          {/* What You'll Learn Section */}
          <div className="bg-gray-100 mt-10 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <FaGraduationCap className="text-purple-600 mr-3" /> What You'll Learn
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
              <motion.div
                className="bg-white p-4 rounded-lg shadow-md flex items-start space-x-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <FaCode className="text-purple-600 text-2xl" />
                <div>
                  <h3 className="font-semibold">React Native Basics</h3>
                  <p>Understand the core concepts of React Native.</p>
                </div>
              </motion.div>
              <motion.div
                className="bg-white p-4 rounded-lg shadow-md flex items-start space-x-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <FaMobileAlt className="text-green-600 text-2xl" />
                <div>
                  <h3 className="font-semibold">Mobile App Design</h3>
                  <p>Learn to design intuitive mobile interfaces.</p>
                </div>
              </motion.div>
              <motion.div
                className="bg-white p-4 rounded-lg shadow-md flex items-start space-x-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <FaDatabase className="text-blue-600 text-2xl" />
                <div>
                  <h3 className="font-semibold">Data Management</h3>
                  <p>Learn to manage data using modern techniques.</p>
                </div>
              </motion.div>
              <motion.div
                className="bg-white p-4 rounded-lg shadow-md flex items-start space-x-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <FaRobot className="text-red-600 text-2xl" />
                <div>
                  <h3 className="font-semibold">Introduction to AI</h3>
                  <p>Get started with Artificial Intelligence concepts.</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Enrollment Requirements Section */}
          <div className="bg-gray-50 mt-10 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <GiPencilRuler className="text-red-600 mr-3" /> Enrollment Requirements
            </h2>
            <ul className="list-disc pl-6">
              <li className="mb-2">Basic knowledge of programming concepts.</li>
              <li className="mb-2">Familiarity with JavaScript is a plus.</li>
              <li className="mb-2">A passion for learning new technologies.</li>
            </ul>
          </div>
        </div>
      </div>
    );
}
