import { useEffect, useMemo, useState } from "react";
import format from "date-fns/format";
import { getHours } from "date-fns";
import React from "react";

export default function PlaygroundTwo() {
  const time = useTime();

  // 시간에 따른 배경색 변경
  const backgroundColor = getBackgroundColorFromTime(time);

  return (
    <div style={{ backgroundColor }}>
      <Clock time={time} />
      <PrimeCalculator />
    </div>
  );
}

function isPrime(num: number) {
  const max = Math.sqrt(num);

  if (num === 2) {
    return true;
  }

  for (let counter = 2; counter <= max; counter++) {
    if (num % counter === 0) {
      return false;
    }
  }

  return true;
}

function useTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return time;
}

const getBackgroundColorFromTime = (time: Date) => {
  const hours = getHours(time);

  if (hours < 12) {
    // A light yellow for mornings
    return "hsl(50deg 100% 90%)";
  } else if (hours < 18) {
    // Dull blue in the afternoon
    return "hsl(220deg 60% 92%)";
  } else {
    // Deeper blue at night
    return "hsl(220deg 100% 80%)";
  }
};

function Clock({ time }: { time: Date }) {
  return <p className="clock">{format(time, "hh:mm:ss a")}</p>;
}

const PrimeCalculator = React.memo(_PrimeCalculator);

function _PrimeCalculator() {
  const [selectedNum, setSelectedNum] = useState(100);

  const allPrimes = [];
  for (let counter = 2; counter < selectedNum; counter++) {
    if (isPrime(counter)) {
      allPrimes.push(counter);
    }
  }

  return (
    <>
      <form>
        <label htmlFor="num">Your number:</label>
        <input
          id="num"
          type="number"
          value={selectedNum}
          onChange={(event) => {
            // 과하게 계산되는 것을 막기위해 최대 100k 까지만 허용
            const num = Math.min(100_000, Number(event.target.value));
            setSelectedNum(num);
          }}
        />
      </form>
      <p>
        There are {allPrimes.length} prime(s) between 1 and {selectedNum}:{" "}
        <span className="prime-list">{allPrimes.join(", ")}</span>
      </p>
    </>
  );
}
