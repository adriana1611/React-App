import ItemCard from "./ItemCard";

export default function ItemList({
  items,
  onDelete,
  onToggleCompleted
}: {
  //Define the structure of the items prop, Function to delete an item,and Function to toggle completion status
  items: { name: string; id: number; completed: boolean }[]; 
  onDelete: (id: number) => void;
  onToggleCompleted: (id: number) => void; 

}) 

// items.map iterates over items and displays each item in an ItemCard component 
{
  return (
    <div className="p-3 bg-secondary vh-100">
      <h3>Your Shopping Cart:</h3>
      {items.map(item => (
        <ItemCard
          key={item.id}
          itemName={item.name}
          itemId={item.id}
          completed={item.completed}
          onDelete={onDelete}
          onToggleCompleted={() => onToggleCompleted(item.id)}
        />
      ))}
    </div>
  );
}

