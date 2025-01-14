import React from "react";
import clsx from "clsx";

type Breakpoints = "sm" | "lg";
type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type GridCols = `${Breakpoints}:grid-cols-${Cols}`;

interface CardContainerProps {
  grid?: "md:grid" | "lg:grid";
  gridcols?: GridCols;
  children: React.ReactNode;
}

export default function CardContainer({ grid = "lg:grid", gridcols, children }: CardContainerProps) {
  return (
    <div className="container h-full w-full">
      <div
        className={clsx("h-full w-full", grid, gridcols, {
          "max-md:flex max-md:flex-col": grid === "md:grid",
          "max-lg:flex max-lg:flex-col": grid === "lg:grid",
          "gap-8": gridcols,
        })}
      >
        {children}
      </div>
    </div>
  );
}
