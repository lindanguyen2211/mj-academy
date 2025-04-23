import StyledEmail from "./StyledEmail";
import List from "./List";
import Image from "./Image";
import './LessonContentRenderer.css'

const LessonContent = ({ content }) => {
  console.log(content);
  return (
    <div className="lesson-content">
      {content.map((item, index) => {
        switch (item.type) {
          case "text":
            return (
              <p key={index} className="lesson-text">
                {item.value}
              </p>
            );

          case "styledEmail":
            return <StyledEmail key={index} {...item} />;

          case "video":
            return (
              <div key={index} className="video-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${item.id}`}
                  title="YouTube video player"
                  allowFullScreen
                  className="video-iframe"
                />
              </div>
            );

          case "image":
            return <Image key={index} {...item} />;

          case "list":
            return <List key={index} {...item} />;

          case "download":
            return <a href={`${item.url}`} download className="button">Download {item.fileName}</a>

          default:
            return null;
        }
      })}
    </div>
  );
};

export default LessonContent;
