import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Select } from "./style";

interface SelectorProps {
   options: Array<number>;
   value: number;
   setValue: (value: string) => number;
   product: Product;
}

interface Product {
   category: string;
   description: string;
   id: string;
   image_url: string;
   name: string;
   price_in_cents: string;
   qty: number;
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
