import { ACTIONS, LIST_ITEM } from "../../constants";
import { Button } from "../button";
import type { ListItemManagerTypes } from "./types";
import ListItem from "../list-item/list-item";
import './list-item-manager.css'

const ListItemManager = (props: ListItemManagerTypes) => {
  const {handleOpenModal, items, onDelete, handleUndo, setSelectedItems, selectedItems} = props

  const handleToggleSelected = (item: string) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(item)
        ? prevSelected.filter((i) => i !== item)
        : [...prevSelected, item]
    );
  };

 const handleDelete = () => {
  if (selectedItems.length > 0) {
    onDelete()
    setSelectedItems([]);
  }
};
 
  return (
    <div className="logitravel-options-title">
      <h1 className="logitravel-options-title" >{LIST_ITEM.title}</h1>
      <p>{LIST_ITEM.description}</p>
      <div>
        <ListItem items={items} selectedItems={selectedItems} handleToggleSelected={handleToggleSelected}/>
      </div>
      <div className="logitravel-options-buttons">
        <div>
          <Button id="undoButton" className="btn icon" children={<span>↺</span>} onClick={handleUndo} />
          <Button id="deleteButton" className="btn outline" children={ACTIONS.delete} onClick={() => handleDelete()}  />
        </div>
        <Button id="addButton" className="btn solid" onClick={handleOpenModal} children ={ACTIONS.add}/>
      </div>
    </div>
  )
}
export default ListItemManager;
