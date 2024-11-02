import ItemCard from "./ItemCard";
import { shoppingItems } from './data';

// ItemList component that displays a list of shopping items
export default function ItemList() {
  return (
    <div className="p-3 bg-secondary vh-100">
      <h3>Your shopping cart:</h3>
      {shoppingItems.map((item) => (
        <ItemCard key={item.id} itemName={item.name} />
      ))}
    </div>
  );
}

