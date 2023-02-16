import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { BsForwardFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const PopUp = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="pop-up">
      <button className="close">
        <AiOutlineClose />
      </button>
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      {step === 3 && <StepThree />}
      <button className="previous" disabled={step === 1 ? true : false}>
        <BiArrowBack />
      </button>
      <button className="next" disabled={step === 3 ? true : false}>
        <BsForwardFill />
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
