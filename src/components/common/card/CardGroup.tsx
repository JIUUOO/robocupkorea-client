import React from "react";
import clsx from "clsx";

type Span = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type Colspan = `col-span-${Span}`;

interface CardGroupProps {
  colspan?: Colspan;
  children?: React.ReactNode;
}

export default function CardGroup({ colspan, children }: CardGroupProps) {
  return (
    <div
      className={clsx("flex w-full flex-col justify-between gap-2 rounded border border-gray bg-white p-5", colspan)}
    >
      {children}
    </div>
  );
}
