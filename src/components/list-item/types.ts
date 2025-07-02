export interface ListItemTypes {
  items: string[]
  selectedItems: string[]
  handleToggleSelected: (item: string) => void
}