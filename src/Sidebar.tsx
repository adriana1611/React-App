import {useState, ChangeEvent} from "react";
import AddButton from "./AddButton";
import SidebarInput from "./SidebarInput";

// Sidebar component provides an interface for adding items to the cart
export default function Sidebar({addItemToCart,}: {
  addItemToCart: (name: string) => void;
}) {

  const[inputValue, setInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    addItemToCart(inputValue);
    setInputValue("");
  };



//below is the button to add a new item to the cart & sidebar input

  return (
    <div className="border-end bg-info p-3 text-white vh-100">
      <SidebarInput inputValue={inputValue} onInputChange={handleInputChange}/>
      <AddButton onClick={handleAddItem} />
    </div>
  );
}

