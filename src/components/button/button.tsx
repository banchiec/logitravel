import type { ButtonTypes } from "./types";

const Button = (props: ButtonTypes) => {
  const { id, type = "button", children, className, onClick, arialLabel } = props
  return(
    <button
      id={id}
      type={type}
      className={`btn ${className}`}
      onClick={onClick}
      aria-label={arialLabel}
    >
      {children}
    </button>
  )
}
export default Button;
