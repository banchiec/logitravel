import { useState } from "react";
import Modal from "../../components/modal/modal";
import { useListManager } from "../../hooks/useListManager";
import ListItemManager from "../../components/list-item-manager/list-item-manager";

const ListManagerView = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const {
    items: currentItems,
    addItem,
    deleteItems,
    handleUndo,
  } = useListManager([]);

  return (
    <>
      <div className="logitravel-options">
        <ListItemManager
          items={currentItems}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          onDelete={() => deleteItems(selectedItems)}
          handleUndo={handleUndo}
          handleOpenModal={() => setModalOpen(true)}
        />
      </div>
      {isModalOpen && (
        <Modal
          handleClose={() => setModalOpen(false)}
          addItem={addItem}
        />
      )}
    </>
  );
};
export default ListManagerView;
