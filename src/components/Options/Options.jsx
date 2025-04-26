const Options = ({ onUpdate, values, totalFeedbackCount, onReset }) => {
  return (
    <div>
      {values.map((value, index) => {
        return (
          <button onClick={() => onUpdate(value)} key={index}>
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </button>
        );
      })}
      {totalFeedbackCount !== 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
};

export default Options;
