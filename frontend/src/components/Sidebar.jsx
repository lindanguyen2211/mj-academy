import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Sidebar = (props) => {
  const { data } = props;
  const logo = new URL("../assets/images/MODJAW_Logo.png", import.meta.url)
    .href;

  return (
    <aside className="course-sidebar">
      <Link to="/dashboard" className="white">
        &lt; Back to Dashboard
      </Link>
      <img src={logo} alt="modjaw logo" className="sidebar-logo" />
      {/* data = each object in data array is a separate chapter, map data array into chapters */}
      {data.map((chapter,index) => {
        return (
          <div key={index}>
            <p className="chapter-title">
                {`${chapter["chapter"]}: ${chapter["title"]}`}
            </p>
            {/* map out chapter lessons array */}
                {chapter["lessons"].map((lesson, index) => {
                        return (
                            <p className="lesson" key={index}>
                                <IoMdCheckmarkCircleOutline className={`lesson-status ${lesson["status"] ? "completed":"in-progress"} `}/>
                                {`${chapter["chapter"]}.${index + 1} ${lesson["title"]}`}
                            </p>
                        );
                    })
                }
          </div>
        );
      })}
    </aside>
  );
};

export default Sidebar;
