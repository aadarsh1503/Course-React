import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseList from './components/CourseList/CourseList.jsx';
import CourseDetails from './components/CourseDetails/CourseDetails.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';


export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-black">
        <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="/course/:courseId" element={<CourseDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}
