import React from 'react'
import './CourseCard.css'
import ProgressBar from './ProgressBar'

const CourseCard = ({ title, description, img, progress }) => {
  return (
    <div className='course-card'>
        <img src={img} alt={`image thumbnail for ${title}`} className='course-card__left'/>
        <div className="course-card__right">
          <div className="top">
            <h3>{title}</h3>
            <p>
                {description}
            </p>
          </div>
          <div className="bottom">
            <button>
              {
                progress == 100 ? 'Completed' 
                  : (progress > 0 ? 'In-Progress' 
                  : 'Start')
              }
            </button>
            <ProgressBar progress={progress}/>
          </div>
        </div>
    </div>
  )
}

export default CourseCard