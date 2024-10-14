"use client";
import React, { useState, useEffect } from "react";
import { UseFormRegister } from "react-hook-form";

type IRadioItemProps = {
  name: string;
  value: string;
};

type RadioProps = {
  label: string;
  name: string;
  checked?: boolean;
  onChange?: (value: any) => void;
  children: IRadioItemProps[];
  registerFunc?: Function;
};

const Radio: React.FC<RadioProps> = ({
  label,
  name,
  checked,
  onChange,
  children = [],
  registerFunc,
  ...props
}) => {
  return (
    <div className="flex items-center text-sm">
      <label className="opacity-40">{label}: </label>
      {children.map((child, index) => (
        <label className="inline-flex items-center space-x-2 opacity-40 pl-4" key={index}>
          <input
            type="radio"
            className="form-radio h-5 w-5 text-blue-600 rounded-full"
            defaultChecked={checked}
            value={child.value}
            onChange={(e) => onChange && onChange(e.target.value)}
            {...props}
            {...registerFunc && registerFunc()}
          />
          <span>{child.name}</span>
        </label>
      ))}
    </div>
  );
};

export default Radio;
