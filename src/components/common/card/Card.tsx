import React from "react";
import clsx from "clsx";

interface CardProps {
  title?: string;
  subtitle?: string;
  description?: React.ReactNode;
  element?: React.ReactNode;
}

export default function Card({ title, subtitle, description, element }: CardProps) {
  return (
    <>
      <div
        className={clsx({
          "mb-2 flex items-end justify-between border-b": subtitle,
          "flex flex-col": !subtitle,
        })}
      >
        {title && <div className="r-text-3xl font-semibold">{title}</div>}
        {subtitle && <div className="r-text-lg font-medium">{subtitle}</div>}
      </div>
      {description && <div className="r-text-base mb-6">{description}</div>}
      {element && <div className="mb-6">{element}</div>}
    </>
  );
}
