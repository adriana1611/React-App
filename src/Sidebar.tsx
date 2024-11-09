import AddButton from "./AddButton";
import SidebarInput from "./SidebarInput";

export default function Sidebar({ addItemToCart }: { addItemToCart: () => void }) {
  return (
    <div className="border-end bg-info p-3 text-white vh-100">  
      <SidebarInput />
      <AddButton onClick={addItemToCart} /> {/* Add item to cart */}
    </div>
  );
}
