export interface ListManagerTypes {
  items: string[];
  selectedItems: string[];
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
  handleOpenModal?: () => void;
  handleUndo: () => void;
  onDelete: () => void;
}
