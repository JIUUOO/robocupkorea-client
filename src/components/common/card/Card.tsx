import React from "react";
import clsx from "clsx";

interface CardProps {
  title?: string | string[]; // 배열로 받게 될 경우 string 별로 text break가 일어나게 한다
  fontSize?: "2xl" | "3xl";
  subtitle?: string;
  description?: React.ReactNode;
}

export default function Card({ title, fontSize = "3xl", subtitle, description }: CardProps) {
  return (
    <div>
      <div
        className={clsx("mb-1.5 flex items-end justify-between", { "mb-3.5 border-b-2 pb-0.5 xl:pb-1.5": subtitle })}
      >
        <div className={clsx("font-semibold", { "r-text-2xl": fontSize === "2xl", "r-text-3xl": fontSize === "3xl" })}>
          {Array.isArray(title)
            ? title.map((text) => (
                <span key={text}>
                  <span className="text-nowrap">{text}</span>{" "}
                </span>
              ))
            : title}
        </div>
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
