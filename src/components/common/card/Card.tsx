import React from "react";
import clsx from "clsx";

interface CardProps {
  title?: string;
  subtitle?: string;
  description?: React.ReactNode;
}

export default function Card({ title, subtitle, description }: CardProps) {
  return (
    <div>
      <div className={clsx("mb-1 flex items-end justify-between", { "mb-3 border-b-2 pb-0.5 xl:pb-1.5": subtitle })}>
        {title && <div className="r-text-2xl font-semibold">{title}</div>}
        {subtitle && <div className="r-text-lg font-medium">{subtitle}</div>}
      </div>
      {description && (
        <div className={clsx("flex flex-col gap-6", { "r-text-base": typeof description === "string" })}>
          {description}
        </div>
      )}
    </div>
  );
}
