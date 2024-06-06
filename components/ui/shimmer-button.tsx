import { title } from 'process'
import React from 'react'

const Shimmer = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    
        // Button code
        <button className={`inline-flex my-10 h-12 animate-shimmer items-center justify-center rounded-3xl border border-purple-900 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-10 font-medium text-neutral-400 transition-colors focus:outline-none gap-2 text-[14px] md:text-[20px] ${otherClasses}`}
        onClick={handleClick}>
          {position === 'left' && icon}
          {title}
          {position === 'right' && icon}
        </button>
      
  )
}

export default Shimmer