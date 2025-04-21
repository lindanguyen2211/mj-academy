import './StyledEmail.css'

const StyledEmail = ({ email, style }) => {
    const getStyle = () => {
      switch(style) {
        case 'highlight-center':
          return 'styled-email highlight centered';
        default:
          return 'styled-email';
      }
    };
  
    return (
      <div className={getStyle()}>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    );
  };

  export default StyledEmail