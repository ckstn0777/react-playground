import React from "react";
import { useState } from "react";

export default function PlaygroundOne() {
  return <Counter />;
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <BigCountNumber count={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>

      {/* 👇 기존 예시에서 추가된 부분 👇 */}
      <Decoration />
    </main>
  );
}

function BigCountNumber({ count }: { count: number }) {
  return (
    <p>
      <span className="prefix">Count:</span>
      {count}
    </p>
  );
}

const Decoration = React.memo(() => <div className="decoration">⛵️</div>);
