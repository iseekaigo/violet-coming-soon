import React from 'react';
import { cn } from "@/lib/utils";

interface MilestoneProps {
  title: string;
  description: string;
  completed?: boolean;
}

export const Milestone = ({
  title,
  description,
  completed = false,
}: MilestoneProps) => {
  return (
    <div className={cn(
      "relative pl-8 pb-8 border-l-2",
      completed ? "border-violet" : "border-violet-light"
    )}>
      <div className={cn(
        "absolute left-[-9px] top-0 w-4 h-4 rounded-full",
        completed ? "bg-violet" : "bg-violet-light border-2 border-violet"
      )} />
      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 ml-4">
        <h3 className="text-xl font-bold text-violet-dark mb-2">{title}</h3>
        <p className="text-violet-dark/80">{description}</p>
      </div>
    </div>
  );
};