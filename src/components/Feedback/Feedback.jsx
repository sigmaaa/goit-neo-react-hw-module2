const Feedback = ({ feedback, positivePercentage }) => {
  const values = Object.keys(feedback);
  return (
    <div>
      {values.map((value, index) => {
        return (
          <p key={index}>
            {value.charAt(0) + value.slice(1)}: {feedback[value]}
          </p>
        );
      })}
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
};

export default Feedback;
