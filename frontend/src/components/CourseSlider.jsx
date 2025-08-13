import React from "react";
import CourseCard from "./CourseCard";
import "./CourseSlider.css"

const CourseSlider = () => {
  // api return courses from backend
  // placeholder const data array
  const data = [
    {
      courseID: "awef123",
      title: "Module 1 - What is Sphere",
      imgURL: "relativelinktoimg",
      tag: "required",
      description:
        "Learn what Sphere is, how it works, and how to use its web-based AI tools. You'll explore all key features, upload .mod files from doctors, and prepare the data for use in your preferred CAD software.",
      lessons: [{ completed: true }, { completed: true }, { completed: true }], //<- progress bar will calculate based on number of completed lessons
    },
    {
      courseID: "apoi123",
      title: "Module 2 - Splint Workflow",
      imgURL: "relativelinktoimg",
      tag: "exocad",
      description:
        "Download a test case and follow along step by step in DentalCAD to design a basic splint using motion data.",
      lessons: [{ completed: true }, { completed: true }, { completed: true }, { completed: false }, { completed: false }], //<- progress bar will calculate based on number of completed lessons
    },
    {
      courseID: "swaet124",
      title: "TWIM- How To Crop Motion",
      imgURL: "relativelinktoimg",
      tag: "practice",
      description:
        "Understand what parts of the motion are clinically useful and why the full motion isn't always needed when designing.",
      lessons: [{ completed: false }, { completed: false }, { completed: false }, { completed: false }, { completed: false }], //<- progress bar will calculate based on number of completed lessons
    },
    {
      courseID: "awef123",
      title: "Module 1 - What is Sphere",
      imgURL: "relativelinktoimg",
      tag: "required",
      description:
        "Learn what Sphere is, how it works, and how to use its web-based AI tools. You'll explore all key features, upload .mod files from doctors, and prepare the data for use in your preferred CAD software.",
      lessons: [{ completed: true }, { completed: true }, { completed: true }], //<- progress bar will calculate based on number of completed lessons
    },
    {
      courseID: "apoi123",
      title: "Module 2 - Splint Workflow",
      imgURL: "relativelinktoimg",
      tag: "exocad",
      description:
        "Download a test case and follow along step by step in DentalCAD to design a basic splint using motion data.",
      lessons: [{ completed: true }, { completed: true }, { completed: true }, { completed: false }, { completed: false }], //<- progress bar will calculate based on number of completed lessons
    },
    {
      courseID: "swaet124",
      title: "TWIM- How To Crop Motion",
      imgURL: "relativelinktoimg",
      tag: "practice",
      description:
        "Understand what parts of the motion are clinically useful and why the full motion isn't always needed when designing.",
      lessons: [{ completed: false }, { completed: false }, { completed: false }, { completed: false }, { completed: false }], //<- progress bar will calculate based on number of completed lessons
    },
  ];
  return <ul id="course_slider">
    {
        data.map( ( course,index ) => (<CourseCard key={index} data={course} />))
    }
  </ul>;
};

export default CourseSlider;
