import React from 'react'
import './CourseCard.css'

const CourseCard = ({ title, description, img }) => {
  return (
    <div className='course-card'>
        <img src={img} alt={`image thumbnail for ${title}`} className='course-card__left'/>
        <div className="course-card__right">
            <h3>{title}</h3>
            <p>
                {description}
            </p>
        </div>
    </div>
  )
}

export default CourseCard