import React from "react";
import { createContext, useContext, useState } from "react";
import { IPlanSelect } from "../utils/types";
import { IAddons } from "../utils/types";



type IuserInfo = {
  name:string,
  email:string,
  phone:number
}

type StateContextProps = {
  children: React.ReactNode
}


type ContextType = {
  userInfo: IuserInfo | null; 
  setUserInfo: React.Dispatch<React.SetStateAction<IuserInfo | null>>
  selectedPlan: IPlanSelect | null;
  setSelectedPlan: React.Dispatch<React.SetStateAction<IPlanSelect | null>>
  isYearly: Boolean,
  setIsYearly: React.Dispatch<React.SetStateAction<Boolean>>
  addOns: IAddons[]| null,
  setAddons: React.Dispatch<React.SetStateAction<IAddons[] | null>>
  coloredPlan: string,
  setColoredPlan:  React.Dispatch<React.SetStateAction<string>>
};

const Context = createContext<ContextType>({
  userInfo: null,
  setUserInfo: () => null,
  selectedPlan: null,
  setSelectedPlan: () => null,
  isYearly: false,
  setIsYearly: () => null,
  addOns: null,
  setAddons: () => null,
  coloredPlan: "",
  setColoredPlan: () => null
});


const StateContext: React.FC<StateContextProps> = ({children}) => {
  const [userInfo, setUserInfo] = useState<IuserInfo | null>(null);
  const [isYearly, setIsYearly] = useState<Boolean>(false)
  const [selectedPlan, setSelectedPlan] = useState<IPlanSelect | null>(null)
  const [addOns, setAddons] = useState<IAddons[] | null>(null)
  const [coloredPlan, setColoredPlan] = useState<string>("")

  const contextValue = {
    userInfo,
    setUserInfo,
    isYearly,
    setIsYearly,
    selectedPlan,
    setSelectedPlan,
    addOns,
    setAddons,
    coloredPlan,
    setColoredPlan
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default StateContext;

export const useStateContext = () => useContext(Context)
