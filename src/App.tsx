import "./App.css";

const playgrounds = [
  {
    title: "React.memo",
    description: "간단한 Counter를 이용한 리렌더링 실습",
  },
  {
    title: "Context API",
    description: "Context API와 리렌더링",
  },
];

function App() {
  return (
    <ul className="main-card-list">
      {playgrounds.map((playground, i) => (
        <li key={i}>
          <a href={`/playground/${i + 1}`} className="main-card">
            <h2>{playground.title}</h2>
            <span className="main-card-title">{playground.description}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default App;
