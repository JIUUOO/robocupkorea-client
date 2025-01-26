import React from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

interface SectionToggleProps {
  title: string;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export default function SectionToggle({ title, isOpen, onClick, children }: SectionToggleProps) {
  return (
    <div className="flex flex-col gap-2.5 xl:gap-3">
      <div className="container flex flex-col items-center">
        <div className="w-full cursor-pointer rounded border border-gray bg-white p-4 lg:p-6" onClick={onClick}>
          <div className="flex justify-between text-2xl font-semibold md:text-3xl">
            <span>{title}</span>
            <FontAwesomeIcon
              icon={faCaretDown}
              className={clsx("aspect-square cursor-pointer transition-transform duration-300", {
                "rotate-180": isOpen,
              })}
            />
          </div>
        </div>
        {isOpen && <div className="relative pt-4">{children}</div>}
      </div>
    </div>
  );
}
