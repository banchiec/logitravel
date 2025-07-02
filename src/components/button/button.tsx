import type { ButtonTypes } from "./types";

const Button = (props: ButtonTypes) => {
  const { id, type = "button", children, className, onClick } = props
  return(
    <button
      id={id}
      type={type}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
export default Button;
