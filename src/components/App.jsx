import { useEffect, useState } from "react";
import "./App.module.css";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("feedback");
    if (savedFeedback !== null) {
      console.log(savedFeedback);
      return JSON.parse(savedFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        onUpdate={updateFeedback}
        values={Object.keys(feedback)}
        totalFeedbackCount={totalFeedback}
        onReset={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} positivePercentage={positiveFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
