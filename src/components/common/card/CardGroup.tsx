import React from "react";

interface CardGroupProps {
  children: React.ReactNode;
}

export default function CardGroup({ children }: CardGroupProps) {
  const cardCount = React.Children.count(children);

  return (
    <div className="container">
      <div className={`w-full gap-10 ${cardCount > 1 ? "max-md:flex max-md:flex-col md:grid md:grid-cols-12" : ""}`}>
        {children}
      </div>
    </div>
  );
}
