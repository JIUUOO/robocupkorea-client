import React from "react";

interface SectionHeaderProps {
  title: string;
  children: React.ReactNode;
}

export default function SectionHeader({ title, children }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="container">
        <div className="r-text-3xl font-semibold">{title}</div>
      </div>
      {children}
    </div>
  );
}
