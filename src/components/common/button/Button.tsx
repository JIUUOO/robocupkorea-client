import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";

type Align = "left" | "center" | "right";
type Color = "primary" | "white";
type Direction = "right" | "up-right" | "down";

export interface ButtonProps {
  onClick?: () => void;
  title?: string;
  icon?: boolean;
  direction?: Direction;
  align?: Align;
  theme?: Color;
}

export default function Button({
  onClick,
  title = "",
  icon = false,
  direction = "right",
  align = "left",
  theme = "primary",
}: ButtonProps) {
  return (
    <div
      className={clsx("flex", {
        "justify-start": align === "left",
        "justify-center": align === "center",
        "justify-end": align === "right",
      })}
    >
      <button
        onClick={onClick}
        className={clsx(
          "r-text-base flex cursor-pointer items-center justify-center break-keep rounded px-3 py-2 font-semibold", // 공통 클래스
          {
            "bg-primary text-white": theme === "primary",
            "bg-white text-primary": theme === "white",
          },
        )}
      >
        {title}
        {icon && direction !== "down" && (
          <>
            &nbsp;
            <FontAwesomeIcon icon={faArrowRight} className={clsx({ "-rotate-45": direction === "up-right" })} />
          </>
        )}
        {icon && direction === "down" && (
          <>
            &nbsp;
            <FontAwesomeIcon icon={faDownload} />
          </>
        )}
      </button>
    </div>
  );
}
