import ItemList from "./ItemList";
import Sidebar from "./Sidebar";


//Main applicaion component (renders sidebar & itemlist components)
export default function MyApp() {
  return (
    <div className="d-flex">
      <div className="flex-shrink-0" style={{ width: '250px' }}>
        <Sidebar />
      </div>
      <div className="flex-grow-1">
        <ItemList />
      </div>
    </div>
  );
}