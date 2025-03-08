import { useEffect, useState } from "react";
import "./App.css";

const ProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(progress);
    }, 200); // Small delay before animation

    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${animatedProgress}%` }}>
        {animatedProgress}%
      </div>
    </div>
  );
};

export default function App() {
  const bars = [0, 5, 10, 30, 50, 70, 100];

  return (
    <div className="container">
      <h1>Progress Bar</h1>
      {bars.map((progress, index) => (
        <ProgressBar key={index} progress={progress} />
      ))}
    </div>
  );
}
