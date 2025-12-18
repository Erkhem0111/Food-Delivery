"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";
import { CreateAccount } from "./_components/CreateAccount";
import { CreateNewPassword } from "./_components/CreateNewPassword";
import { Login } from "./_components/Login";

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

const FormPage = () => {
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
          {step === 1 && <CreateAccount />}
          {step === 2 && <CreateNewPassword />}
          {step === 3 && <Login />}
        </div>
        <img src="/Frame.png" className="m-8 w-full h-[1024px] rounded-3xl" />
      </div>
    </StepContext.Provider>
  );
};
export default FormPage;
