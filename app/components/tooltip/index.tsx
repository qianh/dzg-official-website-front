import React, { useState } from "react";

interface TooltipProps {
  text: React.ReactNode;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative flex items-center">
      <div
        className="flex items-center hover:cursor-pointer"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {children}
      </div>
      {visible && (
        <div className="absolute -left-full -translate-x-full -ml-1 w-max bg-gray-800 text-white rounded py-2 px-2 z-10 transition-opacity duration-300 opacity-100">
          {text}
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-y-8 border-y-transparent border-l-8 border-l-gray-800 -ml-[1px]"></div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
