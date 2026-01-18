import React from 'react';
import { clsx } from '../../utils/helpers';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, className, id, ...props }) => {
  const inputId = id || props.name || Math.random().toString(36).substr(2, 9);

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-slate-300 mb-1">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={clsx(
          "w-full bg-slate-800 border rounded-lg px-4 py-2 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all",
          error ? "border-red-500 focus:ring-red-500/50" : "border-slate-700",
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default Input;