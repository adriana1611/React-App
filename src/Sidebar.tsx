import { useState } from "react";
import AddButton from "./AddButton";
import ItemFormModal from "./ItemFormModal";

//Sidebar component for adding items to the shopping cart
export default function Sidebar({
  addItemToCart,
}: {
  addItemToCart: (name: string, quantity: string) => void;
}) {

  //State to control whether the modal is open or closed
  const [isModalOpen, setIsModalOpen] = useState(false);

  //Function to open the modal
  const handleOpenModal = () => setIsModalOpen(true);

  //Function to close the modal
  const handleCloseModal = () => setIsModalOpen(false);


  //Add Button that triggers the opening of the modal
  //ItemFormModal is the modal that appears when adding or editing an item
  return (
    <div className="border-end bg-info p-3 text-white vh-100">
      <AddButton onClick={handleOpenModal} />
      <ItemFormModal
        show={isModalOpen}
        handleClose={handleCloseModal}
        addItemToCart={(name: string) => addItemToCart(name, "1")}
      />
    </div>
  );
}

