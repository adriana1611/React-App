import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import { shoppingItems } from "./data"; 
import ItemFormModal from "./ItemFormModal";

//The main application component
export default function MyApp() {

  //The structure of a cart item
  type CartItem = {
    id: number;
    name: string;
    quantity: string;
    completed: boolean;
  };


  // State to store the list of items in the cart
  const [cartItems, setCartItems] = useState<CartItem[]>(shoppingItems);

  // State to store the item being edited 
  const [itemToEdit, setItemToEdit] = useState<{ id: number; name: string; quantity: string } | null>(null);

  // State to control the visibility of the modal
  const [isModalOpen,setIsModalOpen] = useState(false);

  // Funcion to add item to cart by updating the state with a copy of the array
  const addItemToCart = (name: string, quantity: string) => {
    setCartItems(prevItems => [
      ...prevItems,
      {id: prevItems.length +1, name, quantity, completed: false},
    ]);
  };

  //Function to update an existing item in the cart
  const updateItemInCart = (id: number, name: string , quantity: string) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
      (item.id === id ? { ...item, name, quantity } :item)) 
       );
  }

  // Function to remove item from cart by filtering out the item with the specified id
  const removeItemFromCart = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Function to toggle the 'completed' status of an item 
  const toggleCompleted = (id: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };


  //Function to open the modal and populate it with the item to be edited
  const handleOpenEditModal = (item: {id: number; name: string; quantity: string}) => {
    setItemToEdit(item);
    setIsModalOpen(true);
  };

  //Function to close the modal and clear the edit state
  const handleCloseModal = () => {
    setItemToEdit(null);
    setIsModalOpen(false);
  }

  //Update the document title with the cart item count 
  useEffect(() => {
    document.title = `Shopping Cart (${cartItems.length} items)`;
    }, [cartItems.length]);

//Sidebar component for adding items
//Main content area displaying the list of items
//Modal for adding or editing items
  return (
    <div className="d-flex">
      <div className="flex-shrink-0" style={{ width: '250px' }}>
        <Sidebar addItemToCart={addItemToCart} />
      </div>
      <div className="flex-grow-1">
        <ItemList
          items={cartItems}
          onDelete={removeItemFromCart}
          onToggleCompleted={toggleCompleted}
          onEdit={handleOpenEditModal}
        />
      </div>
      <ItemFormModal
        show={isModalOpen}
        handleClose={handleCloseModal}
        addItemToCart={addItemToCart}
        updateItemInCart={updateItemInCart}
        editItem={itemToEdit}
      />
    </div>
  );
}
