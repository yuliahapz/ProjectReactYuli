import './Main-container3.css';

const MainContect3 = ({ listGrid3 }) => {
  return (
    <div className="main-container3">
      {listGrid3.map(item => (
        <div key={item.id} className="grid-item3">
          <div className="icon">{item.icon}</div>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MainContect3;