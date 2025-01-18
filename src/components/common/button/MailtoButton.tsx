import Button, { ButtonProps } from "./Button";

interface MailtoButtonProps extends ButtonProps {
  email: string;
}

export default function MailtoButton({ email, ...props }: MailtoButtonProps) {
  const handleClick = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("이메일 주소가 복사되었습니다.");
      })
      .catch(() => {
        alert(`${email}로 문의 부탁드립니다.`);
      });
  };

  return <Button onClick={handleClick} {...props} />;
}
