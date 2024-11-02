//ItemCard component, which displays a single item in the list
export default function ItemCard({ itemName }: { itemName: string }) {
    return (
      <div className="bg-white m-3 p-3 border rounded">
        {itemName} 
      </div>
    );
  }
  
  