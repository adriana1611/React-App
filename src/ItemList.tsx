import ItemCard from "./ItemCard";

export default function ItemList({ items, onDelete }: { items: { name: string; id: number }[], onDelete: (id: number) => void }) {
  return (
    <div className="p-3 bg-secondary vh-100">
      <h3>Your Shopping Cart:</h3>
      {items.map(item => (
        <ItemCard key={item.id} itemName={item.name} itemId={item.id} onDelete={onDelete} />
      ))}
    </div>
  );
}


