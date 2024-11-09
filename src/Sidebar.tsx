import AddButton from "./AddButton";
import SidebarInput from "./SidebarInput";

export default function Sidebar({addItemToCart,}: {
  addItemToCart: () => void;
}) 

//below is the button to add a new item to the cart
{
  return (
    <div className="border-end bg-info p-3 text-white vh-100">
      <SidebarInput/>
      <AddButton onClick={addItemToCart} />
    </div>
  );
}

