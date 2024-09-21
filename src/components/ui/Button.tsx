import { ReactNode } from "react";
import ButtonSvg from "../../assets/svg/ButtonSvg";

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   asChild?: boolean;
// }

const Button = ({
  className,
  white,
  px,
  href,
  onClick,
  children,
}: {
  className?: string;
  white?: boolean;
  px?: string;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
}) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

  const spanClasses = "relative z-10";

  const renderButton = () => {
    return (
      <button className={classes} onClick={onClick}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(white)}
      </button>
    );
  };

  const renderLink = () => {
    return (
      <a href={href} className={classes}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(white)}
      </a>
    );
  };

  return href ? renderLink() : renderButton();
};

export default Button;
