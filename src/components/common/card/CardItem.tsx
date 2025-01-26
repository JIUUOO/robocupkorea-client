import React from "react";
import clsx from "clsx";

type Span = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Colspan = `col-span-${Span}`;

interface CardItemProps {
  colspan?: Colspan;
  children?: React.ReactNode;
  gap?: "sm" | "md";
}

export default function CardItem({ colspan, children, gap = "md" }: CardItemProps) {
  return (
    <div className={clsx("flex h-full w-full flex-col", colspan, { "gap-8": gap === "md", "gap-3": gap === "sm" })}>
      {children}
    </div>
  );
}
