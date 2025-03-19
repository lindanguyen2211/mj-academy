import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './views/Landing'
import UserDashboard from './views/UserDashboard'
import CourseDashboard from './views/CourseDashboard'
import Exam from './views/Exam'
import Certificates from './views/Certificates'
import Library from './views/Library'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/dashboard" element={<UserDashboard/>} />
        {/* !TODO course dashboard changes dynamically based on course selected from user dashboard  
        
          path='/courses/:id'
        */}
        <Route path='/courses' element={<CourseDashboard />} />
        {/* exam correspond to specific course  */}
        <Route path='/courses/exam' element={<Exam />} />
        <Route path='/certificates' element={<Certificates />} /> 
        <Route path='/library' element={<Library />} /> 
      </Routes>

    </>
  )
}

export default App
