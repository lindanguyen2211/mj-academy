import { Route, Routes } from 'react-router-dom'
import Login from './views/Login'
import Dashboard from './views/Dashboard'
import MainLayout from './layouts/MainLayout'
import CourseDashboard from './views/CourseDashboard'

function App() {

  return (
    <>
      <Routes>
        {/* Routes without Layout */}
        <Route path="/" element={<Login />} />

        {/* Routes wrapped with Main Layout */}
        <Route element={<MainLayout />} >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<CourseDashboard />} />
</Route>
      </Routes>
    </>
  )
}

export default App
