"use client";

import { createContext, useContext } from "react";

interface LayoutContextType {
  value: {[key: string]: any};
  setValue: (key: string, value: any) => void;
}

export const LayoutContext = createContext<LayoutContextType | undefined>(
  undefined
);

export const useLayoutContext = (key?: string) => {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error(
      "useLayoutContext must be used within a LayoutContextProvider"
    );
  }
  return key ? context.value[key] : context;
};
