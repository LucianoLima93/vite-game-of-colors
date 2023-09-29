import { twMerge } from "tailwind-merge"
import { ButtonProps } from "./Button.types"

const Button:React.FC<ButtonProps> = ({children, ...rest}) => {
  return (
    <>
      <button
        {...rest}
        className={twMerge('default-btn', rest.className)}>
          {children}
      </button>
    </>
  )
}

export default Button