import React from "react";
import iconThankyou from "../multi-step-form-main/assets/images/icon-thank-you.svg";

const ThankYou: React.FC = () => {
  return (
    <section className="flex relative flex-col justify-center items-center h-full w-full">
      <div className="flex flex-col absolute bottom-40 xs:bottom-60 items-center justify-center gap-2 p-3 px-4 py-20 pb-12 bg-white rounded-lg xs:w-[300px] max-w-[500px] md:gap-5 max-h-[500px]">
        <div className="flex flex-col items-center  gap-3">
          <img className="w-[70px] h-[70px]" src={iconThankyou} />
          <h2 className="text-marine-blue text-xl font-semibold">Thank you!</h2>
        </div>
        <div className="max-w-[320px] mt-2">
          <p className="text-center text-cool-gray ">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@geargames.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
