import React from "react";

interface PlayButtonProps {
  onClick: () => void;
}

const PlayButton = ({ onClick }: PlayButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-pulse-slow group"
    >
      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1 group-hover:border-l-gray-200" />
    </button>
  );
};

export default PlayButton;