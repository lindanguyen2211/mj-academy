import "./List.css"

const List = ({ title, listType, items, style }) => {
  const ListTag = listType === 'ordered' ? 'ol' : 'ul';
  
  return (
    <div className={`list ${style}`}>
      {title && <h4 className="list-title">{title}</h4>}
      <ListTag className="list-container">
        {items.map((item, index) => (
          <li key={index} className="list-item">
            {item}
          </li>
        ))}
      </ListTag>
    </div>
  );
};

export default List;
