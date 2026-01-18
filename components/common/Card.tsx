import React from 'react';
import { clsx } from '../../utils/helpers';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className, animate = false }) => {
  const baseClasses = "bg-slate-800 border border-slate-700 rounded-2xl p-6";
  
  if (animate) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={clsx(baseClasses, className)}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={clsx(baseClasses, className)}>
      {children}
    </div>
  );
};

export default Card;