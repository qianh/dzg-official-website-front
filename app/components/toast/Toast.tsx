import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type ToastType = 'success' | 'warning' | 'error';

export interface ToastProps {
  message: string;
  type: ToastType;
}

const Toast: React.FC<ToastProps> = ({ message, type }: ToastProps) => {
  const baseClasses =
    'fixed text-xl top-[180px] left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-md shadow-lg text-white z-50';

  const typeClasses = {
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500',
  };

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          className={`${baseClasses} ${typeClasses[type]}`}
          initial={{ opacity: 0, y: 50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%'}}
          exit={{ opacity: 0, y: 50, x: '-50%' }}
          transition={{ duration: 0.3 }}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
