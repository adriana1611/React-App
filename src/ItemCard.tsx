//ItemCard component, which displays a single item in the list
export default function ItemCard({ itemName, itemId, onDelete }: { itemName: string, itemId: number, onDelete: (id: number) => void }) {
  return (
    <div className="bg-white m-3 p-3 border rounded d-flex justify-content-between align-items-center">
      {itemName} 
      <button onClick={() => onDelete(itemId)} className="btn btn-danger btn-sm">Delete</button>
    </div>
  );
}
