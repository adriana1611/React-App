import AddButton from "./AddButton";
import SidebarInput from "./SidebarInput";

// Sidebar component that contains input and button elements for the user
export default function Sidebar() {
    return (
    <div className="border-end bg-info p-3 text-white vh-100">  
        <SidebarInput/>
        <AddButton/>
    </div>
    )
}