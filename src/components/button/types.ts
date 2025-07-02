import type { ReactNode } from "react"

export interface ButtonTypes {
  id?: string
  className?: string
  children?: ReactNode
  type?: "button" | "submit" | "reset"
  onClick?: () => void
}
