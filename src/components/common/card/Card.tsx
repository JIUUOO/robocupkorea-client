import React from "react";
import clsx from "clsx";

interface CardProps {
  title?: string | string[]; // 배열로 받게 될 경우 string 별로 text break가 일어나게 한다
  subtitle?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  compact?: boolean;
  divider?: boolean;
  varient?: "default" | "introduce";
  nostretch?: boolean;
}

export default function Card({
  title,
  subtitle,
  content,
  footer,
  compact = false,
  divider = false,
  varient = "default",
  nostretch = false,
}: CardProps) {
  return (
    <div
      className={clsx(
        "flex w-full flex-col justify-between gap-8 rounded border border-gray bg-white p-4 md:p-5 xl:p-6",
        { "h-full": !nostretch },
      )}
    >
      <div className="flex h-full w-full flex-col">
        {title && (
          <div
            className={clsx("mb-1.5", {
              "flex items-end justify-between": subtitle,
              "mb-3.5 border-b md:pb-0.5 xl:pb-1": divider,
              "mb-3": compact,
            })}
          >
            <div
              className={clsx("font-semibold", {
                "text-2xl md:text-3xl": varient === "default",
                "text-3xl xl:text-4xl": varient === "introduce",
              })}
            >
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
        )}

        {content && (
          <div
            className={clsx("flex h-full w-full flex-col", {
              "r-text-base": typeof content === "string",
              "gap-6": !compact,
            })}
          >
            {content}
          </div>
        )}
      </div>
      {footer}
    </div>
  );
}
