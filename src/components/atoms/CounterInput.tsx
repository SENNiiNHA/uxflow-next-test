"use client";
import { Minus, Plus } from "@assets";
import { useState } from "react";

export type CounterInputProps = {
  min?: number;
  max?: number;
  value?: number;
  className?: string;
  onCountChange?: (value: number) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const CounterInput = ({
  min = 1,
  max = 999,
  value = 1,
  className,
  onCountChange,
  ...rest
}: CounterInputProps) => {
  const [count, setCount] = useState<number>(value);

  const countIncrease = () => {
    if (count >= max) return;
    setCount(count + 1);
    if (onCountChange) onCountChange(count + 1);
  };

  const countDecrease = () => {
    if (count <= min) return;
    setCount(count - 1);
    if (onCountChange) onCountChange(count - 1);
  };

  return (
    <div
      className={`flex max-w-[104px] border-none border-transparent bg-gray-100 rounded-lg ${className}`}
    >
      <button className="pl-2 py-3 text-gray-500 bg-transparent" onClick={countDecrease}><Minus className="w-4 h-4" /></button>
      <input
        type="number"
        value={count}
        disabled
        className="w-full bg-gray-100 border-none outline-none text-gray-500 text-center text-md"
        {...rest}
      />
      <button className="pr-2 py-3 text-gray-500" onClick={countIncrease}><Plus className="w-4 h-4" /></button>
    </div>
  );
};

export default CounterInput;
