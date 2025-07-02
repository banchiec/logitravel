export type LastActionTypes =
  | { type: "add"; item: string }
  | { type: "delete"; items: { value: string; index: number }[] }
  | null;