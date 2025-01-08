import React from "react";
import clsx from "clsx";

interface CardContainerProps {
  children: React.ReactNode;
}

export default function CardContainer({ children }: CardContainerProps) {
  const isGrid = React.Children.toArray(children).some((child) => {
    if (React.isValidElement(child)) {
      return typeof child.props.colspan === "string";
    }
    return false;
  });

  return (
    <div className="container">
      <div className={clsx("w-full gap-10", { "max-lg:flex max-lg:flex-col lg:grid lg:grid-cols-10": isGrid })}>
        {children}
      </div>
    </div>
  );
}
