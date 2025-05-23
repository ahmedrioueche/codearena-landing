"use client";
import React from "react";

type InputProps = {
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        className={`flex h-10 w-full text-black dark:text-white rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white 
      file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 
      disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 
      dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-800 ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

export default Input;
