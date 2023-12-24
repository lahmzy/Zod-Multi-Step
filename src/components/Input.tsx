import React from "react";
import {
  FieldValues,
  UseFormRegister,
  useFormContext,
  Controller,
  Control
} from "react-hook-form";


type userInputFieldProps = {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  control?: any
  // register: UseFormRegister<FieldValues>
  // error ? : FieldErrors | undefined
};

const Input: React.FC<userInputFieldProps> = ({
  name,
  type,
  label,
  placeholder,
  control,
  ...rest
  
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FieldValues>();

  const getValidationRules = (inputName: string) => {
    if (inputName === 'email') {
      return {
        required: 'Email is required',
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: 'Invalid email address',
        },
      };
    }

    // Default validation rules for other inputs
    return {
      required: `${label} is required`,
      minLength: {
        value: 3,
        message: `${label} should be at least 3 characters`,
      },
      maxLength: {
        value: 15,
        message: `${label} should not exceed 15 characters`,
      },
    };
  };

  console.log(errors);
  return (
    <div className="md:w-full">
      <label className="text-sm font-thin text-marine-blue capitalize">
        {label}
      </label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <>
            <input placeholder={placeholder} className="h-[30px] inline-block px-2 mt-1 py-3 rounded-md focus:border-none focus:outline-none border-cool-gray placeholder:text-gray-300 ring-2 ring-gray-300 focus:ring-light-blue min-w-[100%]" {...field} />
          </>
        )}
        rules={getValidationRules(name)} // Apply specific validation rules
      />
    </div>
  );
};

export default Input;
