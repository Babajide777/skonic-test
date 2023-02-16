import React from "react";

const PopUp = () => {
  return (
    <div className="pop-up">
      <button className="close"></button>
      <StepOne />
      <StepTwo />
      <StepThree />

      <button className="previous">Previous</button>
      <button className="next">Next</button>
    </div>
  );
};

const StepOne = () => {
  return <div className="step-one">this is popup step 1</div>;
};

const StepTwo = () => {
  return <div className="step-two">00:00:00</div>;
};

const StepThree = () => {
  return <div className="step-three">The assignment is complete!</div>;
};

export default PopUp;
