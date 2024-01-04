import React from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/StateContext";
import SummaryOns from "./SummaryOns";

const Summary: React.FC = () => {
  const { isYearly, coloredPlan, addOns, selectedPlan } = useStateContext();

  const checkedAddOns = addOns?.filter((items) => items.price) || [];

  const TotalMonthlyPrice =
    selectedPlan &&
    selectedPlan.price +
      (checkedAddOns.length > 0
        ? checkedAddOns
            .map((item) => item.price)
            .reduce((accumulator, currentvalue) => accumulator + currentvalue)
        : 0);
  const TotalYearlyPrice =
    selectedPlan &&
    selectedPlan.annual +
      (checkedAddOns.length > 0
        ? checkedAddOns
            .map((item) => item.yearly)
            .reduce((accumulator, currentValue) => accumulator + currentValue)
        : 0);

  console.log(TotalMonthlyPrice, TotalYearlyPrice);

  return (
    <section className="flex flex-col h-full w-full justify-center items-center">
      <div>
        <div className="flex flex-col gap-4 p-3 px-4 py-8 pb-7 -mt-[80px] xs:-mt-[130px] md:mt-0 xs:w-[300px] w-full bg-white rounded-md md:gap-5 max-w-[500px] max-h-[500px]">
          <div className="flex flex-col gap-3">
            <h2 className="font-semibold text-marine-blue text-xl">
              Finishing up
            </h2>
            <p className="text-cool-gray">
              Double-check everything looks OK <br className="md:hidden" />{" "}
              before confirming
            </p>
          </div>
          <div className="bg-magnolia py-4 px-6 flex flex-col w-full gap-4 rounded-lg">
            <div className="flex justify-between border border-t-0 border-r-0 border-l-0 py-2 border-light-gray">
              <div className="flex flex-col">
                <h3 className="font-semibold text-marine-blue">
                  {coloredPlan} {`${isYearly ? "(Yearly)" : "(Monthly)"}`}
                </h3>
                <Link to="/select-plan">
                  <p className="text-cool-gray after:hover:bg-purplish-blue after:block after:h-[2px] after:w-[63px] cursor-pointer hover:text-purplish-blue after:bg-cool-gray after:-mt-[0.4rem]">
                    Change
                  </p>
                </Link>
              </div>
              <span className="font-semibold text-lg text-marine-blue">
                ${isYearly ? selectedPlan?.annual : selectedPlan?.price}
                {`${isYearly ? "/yr" : "/mo"}`}
              </span>
            </div>
            {checkedAddOns
              ? checkedAddOns?.map((items) => {
                  const { pack, price, comment, yearly } = items;

                  return (
                    <SummaryOns
                      key={comment}
                      pack={pack}
                      price={price}
                      comment={comment}
                      yearly={yearly}
                      isYearly={isYearly}
                    />
                  );
                })
              : null}
          </div>
          <div className="px-6 flex justify-between mt-3">
            <p className="text-cool-gray ">{`${
              isYearly ? "Total (per year)" : "Total (per month)"
            }`}</p>
            <span className="text-purplish-blue text-xl whitespace-nowrap font-semibold">
              ${isYearly ? TotalYearlyPrice : TotalMonthlyPrice}{" "}
              {`${isYearly ? "/yr" : "/mo"}`}
            </span>
          </div>
        </div>
        <div className="flex md:px-[14px]  justify-between items-center mt-28 py-3 pb-1 md:mt-40">
          <Link to="/add-ons">
            <button className="text-sm cursor-pointer hover:text-purplish-blue flex items-center justify-center rounded-sm text-cool-gray  py-2 h-8">
              Go Back
            </button>
          </Link>
          <Link to="/thank-you">
            <button className="text-sm cursor-pointer hover:text-light-blue flex items-center justify-center rounded-sm text-white px-4 py-2 h-7 bg-purplish-blue">
              Confirm
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Summary;
