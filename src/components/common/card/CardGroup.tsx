import React from "react";
import clsx from "clsx";

type Span = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type ColSpan = `col-span-${Span}`;

interface CardGroupProps {
  span?: Span;
  children?: React.ReactNode;
}

export default function CardGroup({ span, children }: CardGroupProps) {
  const colSpan: ColSpan | undefined = span ? `col-span-${span}` : undefined;

  return (
    <div
      className={clsx("flex w-full flex-col justify-between gap-2 rounded border border-gray bg-white p-5", colSpan)}
    >
      {children}
    </div>
  );
}
