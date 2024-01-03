import React from "react";
import { addOnsPick } from "../utils/constants";
import Pickadd from "./Pickadd";
import { Link, useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { useStateContext } from "../context/StateContext";


type PickaddSchema = {
  package: string;
  comment: string;
  price: number;
  yearly: number;
};

const AddOns: React.FC = () => {
  const {setAddons,addOns} = useStateContext()
  const methods = useForm<PickaddSchema>();
  const navigate = useNavigate()

  console.log(addOns)

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = (data: PickaddSchema) => {
     
    const arrayOfObjects = Object.values(data).map((value:any) => JSON.parse(value));
    
    if (arrayOfObjects) {
      setAddons(arrayOfObjects)
    }
    navigate("/summary")
  };

  
  console.log(errors);

  return (
    <section className="flex flex-col w-full h-full justify-center items-center">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4 p-3 px-4 py-6 pb-7 -mt-[80px] md:mt-0 xs:w-[300px] sm:w-full bg-white  rounded-md md:gap-5 max-w-[500px] max-h-[500px]">
            <div className="flex flex-col gap-2 mb-2">
              <h2 className="text-marine-blue text-xl font-semibold">
                Pick add-ons
              </h2>
              <p className="text-cool-gray">
                Add-ons help enhance your gaming <br className="xs:hidden" />{" "}
                experience
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {addOnsPick.map((pick,index) => (
                <Pickadd
                  key={index}
                  package={pick.package}
                  price={pick.price}
                  comment={pick.comment}
                  yearly={pick.yearly}
                />
              ))}
            </div>
          </div>
          <div className="flex md:px-[14px]  justify-between items-center mt-24 py-3 pb-1 md:mt-40">
            <Link to="/select-plan">
              <button className="text-sm cursor-pointer hover:text-purplish-blue flex items-center justify-center rounded-sm text-cool-gray  py-2 h-8">
                Go Back
              </button>
            </Link>

            <button
              type="submit"
              className="text-sm cursor-pointer hover:text-light-blue flex items-center justify-center rounded-sm text-white px-4 py-2 h-7 bg-marine-blue"
              disabled={isSubmitting}
            >
              Next Step
            </button>
          </div>
        </form>
      </FormProvider>
    </section>
  );
};

export default AddOns;
