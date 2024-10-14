"use client";
import React, { useState, useEffect } from "react";
import { UseFormRegister } from "react-hook-form";

type IRadioItemProps = {
  name: string;
  value: string;
};

type CheckboxProps = {
  label: string;
  name: string;
  checked?: boolean;
  onChange?: (value: any) => void;
  children: IRadioItemProps[];
  registerFunc?: Function;
  required?: boolean;
};

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  name,
  checked,
  onChange,
  children = [],
  registerFunc,
  required,
  ...props
}) => {
  return (
    <div className="flex text-sm flex-col h-[100%]">
      <label className="pb-2 pl-1">{label}{required ? <span className="text-red-500">*</span> : ""}</label>
      <div className="flex space-x-4 flex-1">
        {children.map((child, index) => (
          <label
            className="inline-flex items-center space-x-2"
            key={index}
          >
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600 rounded"
              defaultChecked={checked}
              value={child.value}
              onChange={(e) => onChange && onChange(e.target.value)}
              {...props}
              {...(registerFunc && registerFunc())}
            />
            <span>{child.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Checkbox;
