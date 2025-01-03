import React from "react";

interface CardGroupProps {
  children: React.ReactNode;
}

export default function CardGroup({ children }: CardGroupProps) {
  const cardCount = React.Children.count(children);

  return (
    <div className="container">
      <div className={`w-full ${cardCount > 1 ? "grid grid-cols-12 gap-10" : ""}`}>{children}</div>
    </div>
  );
}
