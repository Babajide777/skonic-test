import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    let timer;

    if (step === 2) {
      timer = setInterval(() => {
        setSeconds(seconds + 1);

        if (seconds === 59) {
          setSeconds(0);
          setMinutes(minutes + 1);
        }

        if (minutes === 59) {
          setSeconds(0);
          setMinutes(0);
          setHours(hours + 1);
        }
      }, 1000);
    } else {
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    }

    return () => clearInterval(timer);
  }, [seconds, minutes, hours, step]);

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
  return <div className="step-one steps">this is popup step 1</div>;
};

const StepTwo = ({ hours, minutes, seconds }) => {
  return (
    <div className="step-two steps">
      {hours < 10 ? "0" : null}
      {hours}:{minutes < 10 ? "0" : null}
      {minutes}:{seconds < 10 ? "0" : null}
      {seconds}
    </div>
  );
};

const StepThree = () => {
  return <div className="step-three steps">The assignment is complete!</div>;
};

export default PopUp;
