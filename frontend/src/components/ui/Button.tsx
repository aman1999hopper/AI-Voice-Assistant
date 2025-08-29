// components/ui/button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "solid",
  className = "",
  ...props
}) => {
  const base = "px-6 py-3 rounded-xl font-medium transition";
  const styles =
    variant === "solid"
      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
      : "border border-blue-600 text-blue-600 hover:bg-blue-50";

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
};
