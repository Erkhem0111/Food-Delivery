"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";

type StepContextType = {
  step: number;
  data: Data;
  setData: Dispatch<SetStateAction<Data>>;
  handleNext: () => void;
  handleBack: () => void;
};

export const StepContext = createContext<StepContextType>(
  {} as StepContextType
);

export type Data = {
  email: string;
  password: string;
  confirmPassword: string;
};

const HomePage = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<Data>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 3));
  };
  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };
  return (
    <StepContext.Provider
      value={{ handleBack, handleNext, data, setData, step }}
    >
      <div className="flex gap-48">
        {/* <img
          src="/Background.jpg"
          className="absolute z-[-10] w-180 h-full object-center"
        /> */}
        <div className="flex items-center ml-48">
          {step === 1 && <></>}
          {step === 2 && <></>}
          {step === 3 && <></>}
        </div>
        <img src="/Frame.png" className="m-8 w-full h-[1024px] rounded-3xl" />
      </div>
    </StepContext.Provider>
  );
};
export default HomePage;
