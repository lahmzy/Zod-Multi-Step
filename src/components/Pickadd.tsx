import React, { useState } from "react";
import { useStateContext } from "../context/StateContext";
import { useFormContext } from "react-hook-form";

type PickaddProps = {
  comment: string;
  package: string;
  price: number;
  yearly:number
};

const Pickadd: React.FC<PickaddProps> = ({ comment, package: pack, price, yearly }) => {
  const { isYearly } = useStateContext()
  const { register } = useFormContext()
  
  const [coloredBorders,setColoredBorders] = useState<boolean>(false)

  return (
    <label  className={`flex min-w-[320px] transition-all duration-200 hover:border-purplish-blue p-3 justify-between rounded-lg items-center px-2 border ${coloredBorders ? "border-purplish-blue bg-magnolia": "border-cool-gray"}`}>
      <div onClick={() => setColoredBorders(prev => !prev)} className="flex gap-3">
        <input type="checkbox" {...register(pack)} value={JSON.stringify({ pack, price,comment,yearly })}/>
        <div className=" flex flex-col">
          <p className="font-semibold text-marine-blue">{pack}</p>
          <p className="text-sm text-cool-gray">{comment}</p>
        </div>
      </div>
      <span className="text-purplish-blue justify-end">+${isYearly ? yearly : price}{`${isYearly ? "/yr" :"/mo"}`}</span>
    </label>
  );
};

export default Pickadd;
