import React from "react";

type ISummaryOns = {
    pack: string;
    yearly: number;
    isYearly: Boolean;
    price: number;
    comment: string;
}

const SummaryOns:React.FC<ISummaryOns> = ({pack,yearly,isYearly,price}) => {
  return (
    <div className="flex w-full justify-between">
      <p className="text-cool-gray">{ pack}</p>
      <span className="text-marine-blue">+${isYearly ? yearly : price} {`${isYearly ? "/yr" : "/mo"}` }</span>
    </div>
  );
};

export default SummaryOns;
