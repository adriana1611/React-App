import { useState } from "react";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import { shoppingItems } from "./data"; // Importing test data

export default function MyApp() {
  const [cartItems, setCartItems] = useState(shoppingItems); // Initialize with test data

  const addItemToCart = () => {
    setCartItems(prevItems => [
      ...prevItems,
      shoppingItems[prevItems.length % shoppingItems.length] // Add next item in the list
    ]);
  };

  const removeItemFromCart = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id)); // Filter out item with matching id
  };

  return (
    <div className="d-flex">
      <div className="flex-shrink-0" style={{ width: '250px' }}>
        <Sidebar addItemToCart={addItemToCart} />
      </div>
      <div className="flex-grow-1">
        <ItemList items={cartItems} onDelete={removeItemFromCart} />
      </div>
    </div>
  );
}

