import { useNavigate } from "react-router-dom";

interface NavigateButtonProps {
  align?: string;
  to: string;
  title: string;
}

export default function NavigateButton({ align = "justify-start", to, title }: NavigateButtonProps) {
  const navigate = useNavigate();

  return (
    <div className={`${align} flex`}>
      <div
        onClick={() => navigate(to)}
        className={
          "flex cursor-pointer items-center justify-center rounded-[3px] bg-primary px-3 py-2 font-semibold text-white"
        }
      >
        {title}
      </div>
    </div>
  );
}
