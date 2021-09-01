import React from "react";

import { Select } from "./style";

interface SelectorProps {
   options: Array<number>;
   value: number;
   setValue: (value: number) => number;
}

export const Selector = ({ options, value, setValue }: SelectorProps) => {
   return (
      <Select value={value} onChange={({ target }) => setValue(target.value)}>
         {options?.map((option) => (
            <option key={option} value={option}>
               {option}
            </option>
         ))}
      </Select>
   );
};
