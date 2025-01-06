import React from "react";
import clsx from "clsx";

interface CardContainerProps {
  children: React.ReactNode;
}

export default function CardContainer({ children }: CardContainerProps) {
  const cardCount = React.Children.count(children);

  return (
    <div className="container">
      <div className={clsx("w-full gap-10", { "max-lg:flex max-lg:flex-col lg:grid lg:grid-cols-10": cardCount >= 2 })}>
        {children}
      </div>
    </div>
  );
}
