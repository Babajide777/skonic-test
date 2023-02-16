import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdArrowForward, MdArrowBack } from "react-icons/md";

const PopUp = ({ setShowPopUp }) => {
  const [step, setStep] = useState(1);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handlePrevious = () => {
    step === 3 ? setStep(2) : step === 2 ? setStep(1) : setStep(1);
  };

  const handleNext = () => {
    step === 1 ? setStep(2) : step === 2 ? setStep(3) : setStep(3);
  };

  return (
    <div className="pop-up">
      <button className="close" onClick={() => setShowPopUp(false)}>
        <AiOutlineClose />
      </button>
      {step === 1 && <StepOne />}
      {step === 2 && (
        <StepTwo hours={hours} minutes={minutes} seconds={seconds} />
      )}
      {step === 3 && <StepThree />}
      <button
        className="previous"
        disabled={step === 1 ? true : false}
        onClick={handlePrevious}
      >
        <MdArrowBack />
      </button>
      <button
        className="next"
        disabled={step === 3 ? true : false}
        onClick={handleNext}
      >
        <MdArrowForward />
      </button>
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
