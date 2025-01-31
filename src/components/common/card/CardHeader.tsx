import React from "react";

interface CardHeaderProps {
  title: string;
  children: React.ReactNode;
}

export default function CardHeader({ title, children }: CardHeaderProps) {
  return (
    <div className="flex flex-col gap-2.5 xl:gap-3">
      <div className="container">
        <div className="r-text-4xl font-semibold">{title}</div>
      </div>
      {children}
    </div>
  );
}
