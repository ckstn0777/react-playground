import React from "react";

export default function PlaygroundFour() {
  const [count, setCount] = React.useState(0);

  const handleMegaBoost = React.useCallback(() => {
    setCount((currentValue) => currentValue + 1234);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
      <MegaBoost handleClick={handleMegaBoost} />
    </div>
  );
}

const MegaBoost = React.memo(_MegaBoost);

function _MegaBoost({ handleClick }: { handleClick: () => void }) {
  console.log("Render MegaBoost");

  return (
    <button className="mega-boost-button" onClick={handleClick}>
      MEGA BOOST!
    </button>
  );
}
