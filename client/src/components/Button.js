import React from "react";

function Button({
  title,
  onClick,
  variant,
  disabled,
  fullWidth,
  type,
  marginTop = "",
}) {
  let className = "bg-primary p-1 text-white";

  if (fullWidth) {
    className += " w-full";
  }
  if (variant === "outlined") {
    className = className.replace(
      "bg-primary",
      "border border-primary text-primary bg-white"
    );
  }

  className = className + " " + marginTop;

  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
}

export default Button;
