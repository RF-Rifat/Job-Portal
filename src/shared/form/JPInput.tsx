"use client";

import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { TInputProps } from "@/types/form.type";

interface Iprops extends TInputProps {
  placeholder?: string;
}

const JPInput = ({
  type = "text",
  name,
  className,
  defaultValue = "",
  placeholder,
}: Iprops) => {
  const { theme } = { theme: "dark" };
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <Controller
        name={name}
        defaultValue={defaultValue}
        render={({ field }) => (
          <Input
            autoComplete="off"
            placeholder={placeholder}
            className={`
              ${className}
              ${
                theme === "dark"
                  ? "bg-[#fff] shadow placeholder:text-[#8f8f8f] placeholder:text-sm border-none hover:bg-[#f7f7f7] focus-within:bg-[#fff] text-[black] !text-[15px] p-2"
                  : ""
              }
              text-xl
            `}
            {...field}
            type={type}
            id={name}
          />
        )}
      />
      <>
        {errors && typeof errors[name]?.message === "string" ? (
          <small className="text-red-500">{errors[name]?.message}</small>
        ) : (
          ""
        )}
      </>
    </div>
  );
};

export default JPInput;
