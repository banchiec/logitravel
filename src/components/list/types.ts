export interface ListTypes {
  items: string[]
  selectedItems: string[]
  handleToggleSelected: (item: string) => void
}