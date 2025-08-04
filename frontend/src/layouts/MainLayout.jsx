import React from 'react'
import { Outlet } from 'react-router-dom'
import './MainLayout.css'
import Sidebar from '../components/Sidebar'

const MainLayout = () => {
  return (
    <div className='layout-container'>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="main-content">
            <Outlet /> {/* This is where child routes appear*/}
        </main>
    </div>
  )
}

export default MainLayout