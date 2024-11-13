import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import { shoppingItems } from "./data"; 

export default function MyApp() {
  // Initialize state with the test data
  const [cartItems, setCartItems] = useState(shoppingItems);

  // Add item to cart  by updating the state with a copy of the array
  const addItemToCart = (name: string) => {
    setCartItems(prevItems => [
      ...prevItems,
      {id: prevItems.length +1, name, completed: false},
    ]);
  };

  // Remove item from cart by filtering out the item with the specified id
  const removeItemFromCart = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Toggle the 'completed' property between true & false
  const toggleCompleted = (id: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  //Update the document title with the cart item count 
useEffect(() => {
 document.title = `Shopping Cart (${cartItems.length} items)`;
}, [cartItems.length]);

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
        />
      </div>
    </div>
  );
}
