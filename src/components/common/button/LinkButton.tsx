import { useNavigate } from "react-router-dom";

import Button, { ButtonProps } from "./Button";

interface LinkButtonProps extends ButtonProps {
  to: string;
  external?: boolean;
}

export default function LinkButton({ to, external = false, ...props }: LinkButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (external) {
      window.open(to, "_blank");
    } else {
      navigate(to);
    }
  };

  if (!to) {
    return;
  }

  return <Button onClick={handleClick} {...props} />;
}
