import React from "react";
import { createRoot } from 'react-dom/client';
import Toast, { ToastType } from "./Toast";

const createToastContainer = () => {
  const container = document.createElement("div");
  document.body.appendChild(container);
  return container;
};

const removeToastContainer = (root: any, container: any) => {
  root.unmount();
  document.body.removeChild(container);
};

const toast = {
  success: (message: string, duration?: number) => showToast(message, "success", duration),
  warning: (message: string, duration?: number) => showToast(message, "warning", duration),
  error: (message: string, duration?: number) => showToast(message, "error", duration),
};

const showToast = (message: string, type: ToastType, duration = 3000) => {
  const container = createToastContainer();
  const root = createRoot(container);
  root.render(<Toast message={message} type={type} />);


  setTimeout(() => {
    removeToastContainer(root, container);
  }, duration); // 默认3秒后移除Toast
};

export default toast;
