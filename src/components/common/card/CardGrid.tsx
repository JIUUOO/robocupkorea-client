import React from "react";
import clsx from "clsx";

interface CardGridProps {
  grid?: "md:grid" | "lg:grid";
  gridcols?: string;
  children: React.ReactNode;
}

export default function CardGrid({ grid = "lg:grid", gridcols, children }: CardGridProps) {
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
