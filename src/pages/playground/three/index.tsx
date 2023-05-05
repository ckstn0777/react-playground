import React from "react";
import { useState } from "react";
import "./style.css";

export default function PlaygroundThree() {
  const [name, setName] = useState("");
  const [boxWidth, setBoxWidth] = React.useState(1);

  const boxes = React.useMemo(() => {
    return [
      { flex: boxWidth, background: "hsl(345deg 100% 50%)" },
      { flex: 3, background: "hsl(260deg 100% 40%)" },
      { flex: 1, background: "hsl(50deg 100% 60%)" },
    ];
  }, [boxWidth]);

  const id = React.useId();

  return (
    <>
      <Boxes boxes={boxes} />

      <section>
        <label htmlFor={`${id}-name`}>Name:</label>
        <input
          id={`${id}-name`}
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label htmlFor={`${id}-box-width`}>First box width:</label>
        <input
          id={`${id}-box-width`}
          type="range"
          min={1}
          max={5}
          step={0.01}
          value={boxWidth}
          onChange={(event) => {
            setBoxWidth(Number(event.target.value));
          }}
        />
      </section>
    </>
  );
}

const Boxes = React.memo(({ boxes }: { boxes: any[] }) => (
  <div className="boxes-wrapper">
    {boxes.map((boxStyles, index) => (
      <div key={index} className="box" style={boxStyles} />
    ))}
  </div>
));
