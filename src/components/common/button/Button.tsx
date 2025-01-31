import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faFilePdf } from "@fortawesome/free-solid-svg-icons";

export interface ButtonProps {
  onClick?: () => void;
  title?: string;
  icon?: undefined | "arrow-right" | "arrow-up-right" | "file-pdf";
  align?: "left" | "center" | "right";
  theme?: "primary" | "white";
}

export default function Button({ onClick, title = "", icon, align = "left", theme = "primary" }: ButtonProps) {
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
        {(icon === "arrow-right" || icon === "arrow-up-right") && (
          <>
            &nbsp;
            <FontAwesomeIcon icon={faArrowRight} className={clsx({ "-rotate-45": icon === "arrow-up-right" })} />
          </>
        )}
        {icon === "file-pdf" && (
          <>
            &nbsp;
            <FontAwesomeIcon icon={faFilePdf} />
          </>
        )}
      </button>
    </div>
  );
}
