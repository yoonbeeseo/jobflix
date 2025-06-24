import { useState } from "react";
import { twMerge } from "tailwind-merge";

const Input = ({
  id,
  placeholder,
  value,
  onChange,
  className,
  labelClassName,
  containerClassName,
  type,
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <div
      className={twMerge("relative flex flex-col w-full", containerClassName)}
    >
      {placeholder && (
        <label
          htmlFor={id}
          className={twMerge(
            "text-xs absolute top-1/2 left-1/2 -translate-1/2 transition-all duration-500",
            (focused || value.length > 0) && "top-1 left-2 translate-0",
            labelClassName
          )}
        >
          {placeholder}
        </label>
      )}
      <input
        id={id}
        type={type ?? "text"}
        value={value}
        onChange={onChange}
        className={twMerge(
          "border rounded border-zinc-600 bg-black/50 outline-0 h-12 p-2 focus:pt-4",
          value.length > 0 && "pt-4",
          className
        )}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
};

export default Input;
