import React from "react";
import clsx from "clsx";

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type GridCols = `lg:grid-cols-${Cols}`;

interface CardContainerProps {
  gridcols?: GridCols;
  children: React.ReactNode;
}

export default function CardContainer({ gridcols, children }: CardContainerProps) {
  return (
    <div className="container h-full w-full">
      <div
        className={clsx("h-full w-full", gridcols, {
          "gap-8 max-lg:flex max-lg:flex-col lg:grid": gridcols,
        })}
      >
        {children}
      </div>
    </div>
  );
}
