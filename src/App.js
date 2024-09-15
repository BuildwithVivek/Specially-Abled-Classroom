import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import BClassroom from './components/Bclassroom';
import DClassroom from './components/Dclassroom';
import Quiz from './components/quiz';
import TextEditor from './components/TextEditor';
import quizData from '../src/quizData';
import Subjects from './components/subject';   
import Dashboard from './components/Dashboard';
import StudentProgressReport from './components/StudentProgressReport';
import studentsData from './components/studentsData';


const App = () => {

  const [students, setStudents] = useState(() => {
    // Load students from LocalStorage on component mount
    const storedStudents = localStorage.getItem('students');
    return storedStudents ? JSON.parse(storedStudents) : [];
  });

  useEffect(() => {
    // Save students to LocalStorage whenever students change
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  return (
    <div className="App">
      <Router>
        <header>
          <div className='logo'>
            <img src='https://res.cloudinary.com/cloud0310/image/upload/v1702959775/Group_1_of88oz.png' alt="Logo" style={{ height: '45px', paddingRight: '10px' }} />
            <h1>YUKTA</h1>
          </div>
          <nav>
            <ul>
            <li>
                <Link to="/">DashBoard</Link>
              </li>
              <li>
                <Link to="/bclassroom">Classroom : Blinds</Link>
              </li>
              <li>
                <Link to="/dclassroom">Classroom : Deaf</Link>
              </li>
              <li>
                <Link to="/quiz">Quiz</Link>
              </li>
              <li>
                <Link to="/text-editor">Text Editor</Link>
              </li>
              <li>
              <a href="https://6582d2448c16a8008bdf496f--sunny-marigold-2ae098.netlify.app/" target="_blank" rel="noopener noreferrer">News</a>
            </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<Dashboard students={students} setStudents={setStudents}/>} />
          <Route path='/quiz' element={<Quiz quizData={quizData} />} />
          <Route path='/text-editor' element={<TextEditor />} />
          <Route path='/bclassroom' element={<BClassroom />} />
          <Route path='/dclassroom' element={<DClassroom />} />
          <Route path='/news' element={<DClassroom />} />
          <Route path='/subjects/:standardName' element={<Subjects />} />
          <Route path='/progress/:studentId' element={<StudentProgressReport />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
