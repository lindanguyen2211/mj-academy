import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './views/Landing'
import UserDashboard from './views/UserDashboard'
import CourseDashboard from './views/CourseDashboard'
import Exam from './views/Exam'
import Certificates from './views/Certificates'
import Library from './views/Library'
import Lesson from './views/Lesson'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/dashboard" element={<UserDashboard/>} />
        <Route path='/courses/:courseId' element={<CourseDashboard />} />
        <Route path='/courses/:courseId/:lessonSlug' element={<Lesson />} />
        {/* exam correspond to specific course  */}
        <Route path='/courses/exam' element={<Exam />} />
        <Route path='/certificates' element={<Certificates />} /> 
        <Route path='/library' element={<Library />} /> 
      </Routes>

    </>
  )
}

export default App
