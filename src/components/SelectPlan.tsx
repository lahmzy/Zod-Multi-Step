import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { planSelect } from "../utils/constants";
import PlanCard from "./PlanCard";
import Switch from "./Switch";
import { IPlanSelect } from "../utils/types";
import { useStateContext } from "../context/StateContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const selectPlan: React.FC = () => {
  const {
    isYearly,
    selectedPlan,
    setSelectedPlan,
    setColoredPlan,
    coloredPlan,
    setIsYearly,
  } = useStateContext();

  const navigate = useNavigate()


  const handleToaster = () => {
    if (selectedPlan) {
      navigate("/add-ons")
    } else {
      toast("please select a plan")
    }
  }


  const handleClick = (plan: string, planSelect: IPlanSelect[]) => {
    const chosenPlan = planSelect.find((items) => items.plan === plan);

    if (chosenPlan) {
      setSelectedPlan(chosenPlan);
    }

    setColoredPlan(plan);
  };

  return (
    <section className="flex flex-col justify-center items-center h-full w-full">
      <ToastContainer />
      <div className=" flex flex-col gap-2 ">
        <div className="flex flex-col gap-2 p-3 px-4 py-6 pb-7 -mt-[95px] md:mt-0 bg-white rounded-lg md:gap-5 max-w-[500px] max-h-[500px] transition-all duration-200">
          <div className="flex flex-col gap-3">
            <h1 className="text-marine-blue text-xl font-semibold">
              Select your Plan
            </h1>
            <p className="text-cool-gray md:whitespace-nowrap">
              You have the option of monthly or <br className="md:hidden" />
              yearly billing
            </p>
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:mt-5">
            {planSelect.map((plans, index) => {
              const { image, plan, price, annual } = plans;
              return (
                <div
                  onClick={() => handleClick(plan, planSelect)}
                  className="w-full"
                >
                  <PlanCard
                    key={index}
                    image={image}
                    plan={plan}
                    price={price}
                    isYearly={isYearly}
                    coloredPlan={coloredPlan}
                    annual={annual}
                  />
                </div>
              );
            })}
          </div>
          <div className="bg-magnolia px-1 mt-2 py-5 h-4 items-center border rounded-lg flex justify-around w-full md:h-5 md:py-5">
            <p
              className={`font-semibold text-sm ${
                isYearly ? "text-cool-gray" : "text-marine-blue"
              }`}
            >
              Monthly
            </p>
            <Switch isYearly={isYearly} setIsYearly={setIsYearly} />
            <p
              className={`${
                isYearly ? "text-marine-blue" : "text-cool-gray"
              } text-sm font-semibold`}
            >
              Yearly
            </p>
          </div>
        </div>

        <div className="flex md:px-[14px] justify-between items-center mt-16 py-3 pb-1 md:mt-40">
          <Link to="/">
            <button className="text-sm cursor-pointer hover:text-purplish-blue flex items-center justify-center rounded-sm text-cool-gray py-2 h-8">
              Go Back
            </button>
          </Link>
          <div onClick={handleToaster}>
            <button className="text-sm cursor-pointer hover:text-light-blue flex items-center justify-center rounded-sm text-white px-4 py-2 h-7 bg-marine-blue">
              Next Step
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default selectPlan;
