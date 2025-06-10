"use client";
import { TailSpin } from "react-loader-spinner";

export const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-64">
    <TailSpin height="80" width="80" color="#4fa94d" ariaLabel="loading" />
  </div>
);
