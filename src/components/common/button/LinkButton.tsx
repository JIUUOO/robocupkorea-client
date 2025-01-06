import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

type Align = "left" | "center" | "right";
type Color = "primary" | "white";

interface LinkButtonProps {
  to: string;
  external?: boolean;
  title: string;
  icon?: boolean;
  align?: Align;
  theme?: Color;
}

export default function LinkButton({
  to,
  external = false,
  title,
  icon = false,
  align = "left",
  theme = "primary",
}: LinkButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (external) {
      window.open(to, "_blank");
    } else {
      navigate(to);
    }
  };

  return (
    <div
      className={clsx("flex", {
        "justify-start": align === "left",
        "justify-center": align === "center",
        "justify-end": align === "right",
      })}
    >
      <button
        onClick={handleClick}
        className={clsx(
          "r-text-base flex cursor-pointer items-center justify-center rounded px-3 py-2 font-semibold", // 공통 클래스
          {
            "bg-primary text-white": theme === "primary",
            "bg-white text-primary": theme === "white",
          },
        )}
      >
        {title}
        {icon && (
          <>
            &nbsp;
            <FontAwesomeIcon icon={faArrowRight} className={clsx({ "-rotate-45": external })} />
          </>
        )}
      </button>
    </div>
  );
}
