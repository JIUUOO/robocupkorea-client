import React from "react";

import NavigateButton from "@/components/common/NavigateButton";

interface CardProps {
  span?: string;
  title: string;
  subtitle?: string;
  description?: React.ReactNode;
  element?: React.ReactNode;
  align?: string;
  to?: string;
  label?: string;
}

export default function Card({
  span = "",
  title,
  subtitle,
  description,
  element,
  align = "justify-start",
  to,
  label,
}: CardProps) {
  return (
    <div className={`${span} flex w-full flex-col justify-between gap-3 rounded-[3px] border border-gray bg-white p-5`}>
      <div className={`${subtitle ? "mb-2 flex items-end justify-between border-b" : "flex flex-col gap-4"}`}>
        <div className="text-3xl font-semibold">{title}</div>
        {subtitle && <div className="text-lg font-medium">{subtitle}</div>}
        {description && <div className="mb-6">{description}</div>}
      </div>
      {element && <div className="mb-6">{element}</div>}
      {to && label && <NavigateButton align={align} to={to} title={label} />}
    </div>
  );
}
