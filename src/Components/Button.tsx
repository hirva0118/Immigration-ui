import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "none";
  onClick?: () => void;
  className?: string;
  endIcon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  onClick,
  endIcon,
  className = "",
  type = "button",
}) => {
  const baseStyle = "py-[15px]";
  const variantStyles: Record<"primary" | "none", string> = {
    primary: "bg-lightGreen text-white",
    none: "bg-transparent text-darkGreen ",
  };
  return (
    <div className="flex items-center justify-center ">
      <button
        type={type}
        onClick={onClick}
        className={`${baseStyle} ${variantStyles[variant]} ${className} rounded-full py-[15px] flex gap-2 font-jakarta items-center`}
      >
        {children}
        {endIcon && <span className="ml-2">{endIcon}</span>}
      </button>
    </div>
  );
};

export default Button;
