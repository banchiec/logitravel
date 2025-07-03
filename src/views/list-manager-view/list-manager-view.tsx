import { useState } from "react";
import { useListManager } from "../../hooks/useListManager";
import { ListManager, Modal } from "../../components";

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
        <ListManager
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
