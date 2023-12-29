import React from "react";

import Input from "./Input";

import {
  useForm,
  FormProvider,
} from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useNavigate } from "react-router-dom";

type FormSchema = {
  name: string;
  email: string;
  phone: number;
};

const UserInfo: React.FC = () => {
  const methods = useForm<FormSchema>();

  const navigate = useNavigate()

  const { control,
    formState: { isSubmitting,errors},
  } = methods;

  console.log(errors)

  const onSubmit = (data: FormSchema) => {
    console.log(data);
    navigate("/select-plan")

    
  };

  return (
    <section className="w-full h-full flex flex-col justify-center  items-center">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col"
        >
          <div className=" p-3 py-6 pb-7 -mt-[130px] md:mt-0 bg-white sm:min-w-[260px] min-w-[340px] rounded-lg">
            <div className="flex flex-col md:gap-0 gap-4">
              <h2 className="text-2xl text-marine-blue font-semibold md:mb-5">
                Personal info
              </h2>
              <p className="text-cool-gray text-sm">
                Please provide your name,
                <br className="md:hidden" />
                email address, and phone number.
              </p>
            </div>

            <div className="w-full flex flex-col py-2 md:gap-6 gap-4 mt-2">
              <Input
                name="name"
                type="text"
                placeholder=" e.g Stephen King"
                label="name"
                control={control}
              />
              <ErrorMessage errors={errors} name="name" render={({ message }) => <p className="text-red-500 text-sm -mt-3">*{message}</p>} />
              <Input
                name="email"
                type="email"
                placeholder="e.g stephenking@gmail.com"
                label="email Address"
                control={control}
                
                // register={register}
                // error={errors  && errors}
              />
               <ErrorMessage errors={errors} name="email" render={({ message }) => <p className="text-red-500 text-sm -mt-3">*{message}</p>} />
              <Input
                name="phone"
                type="tel"
                placeholder="e.g +234 706 607 098"
                label="phone number"
                control={control}
              />
               <ErrorMessage errors={errors} name="phone" render={({ message }) => <p className="text-red-500 text-sm -mt-3">*{message}</p>} />
            </div>
          </div>
          <div className="mt-[7rem] self-end  lg:mr-3 bg-white md:mr-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="text-sm cursor-pointer disabled:bg-gray-500 hover:text-light-blue flex items-center justify-center rounded-sm text-white px-4 py-2 h-8  bg-marine-blue"
            >
              Next Step
            </button>
          </div>
        </form>
      </FormProvider>
    </section>
  );
};

export default UserInfo;
