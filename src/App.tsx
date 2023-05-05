import "./App.css";
import { playgrounds } from "./playgrounds";

function App() {
  return (
    <>
      <h2>React 최적화 플레이그라운드</h2>
      <ul className="main-card-list">
        {playgrounds.map((playground, i) => (
          <li key={i}>
            <a
              href={`/react-playground/playground/${i + 1}`}
              className="main-card"
            >
              <h2>{playground.title}</h2>
              <span className="main-card-title">{playground.description}</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
