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
            <div>{title}</div>
            <div className="flex items-center justify-center">
              <FontAwesomeIcon icon={faCaretDown} className={clsx("aspect-square cursor-pointer")} />
            </div>
          </div>
        </div>
        {isOpen && <div className="relative w-full pt-4">{children}</div>}
      </div>
    </div>
  );
}
