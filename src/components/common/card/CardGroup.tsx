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
      className={clsx(
        "flex w-full flex-col justify-between gap-10 rounded border border-gray bg-white p-6 md:p-8 xl:p-10",
        colspan,
      )}
    >
      {children}
    </div>
  );
}
