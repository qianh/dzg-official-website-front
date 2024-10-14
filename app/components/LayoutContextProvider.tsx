"use client";

import { useState, ReactNode } from "react";
import { LayoutContext } from "./LayoutContext";

interface LayoutContextProviderProps {
  children: ReactNode;
  value: any;
}

export const LayoutContextProvider = ({
  children,
  value,
}: LayoutContextProviderProps) => {
  const [contextValue, setContextValue] = useState(value);

  const handleSetValue = (key: string, newValue: any) => {
    setContextValue({
      ...contextValue,
      [key]: newValue,
    });
  };

  return (
    <LayoutContext.Provider
      value={{ value: contextValue, setValue: handleSetValue }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
