import React from "react";

type PlanCardProps = {
  image: string;
  plan: string;
  price: number;
  isYearly: Boolean;
  coloredPlan: string;
  annual: number;
};

const PlanCard: React.FC<PlanCardProps> = ({
  image,
  plan,
  price,
  isYearly,
  coloredPlan,
  annual,
}) => {
  return (
    <div
      className={`transition-all duration-500 md:justify-center md:min-h-[140px] px-3 py-2 flex md:flex-col md:gap-4 md:w-[150px] w-[300px] gap-3 border ${
        plan === coloredPlan
          ? "border-purplish-blue border-2"
          : "border-cool-gray"
      } md:items-start rounded-md md:rounded-lg`}
    >
      <img src={image} />
      <div className="flex flex-col justify-center gap-1 items-start">
        <p className="font-semibold text-marine-blue">{plan}</p>
        <p className="font-thin text-cool-gray">
          +${isYearly ? annual : price}
          {`${isYearly ? "/yr" : "/mo"}`}
        </p>
        {isYearly && (
          <p className="text-sm font-[400] whitespace-nowrap text-marine-blue transition-all duration-500">
            2 months free
          </p>
        )}
      </div>
    </div>
  );
};

export default PlanCard;
