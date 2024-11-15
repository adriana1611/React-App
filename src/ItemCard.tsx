// ItemCard component displays an individual item in the shopping list. (Options to toggle the completed status, edit the item or delete it.) 

export default function ItemCard({
  itemName,
  itemId,
  quantity,
  completed,
  onDelete,
  onToggleCompleted,
  onEdit,
}:

{
  itemName: string;
  itemId: number;
  quantity: string;
  completed: boolean;
  onDelete: (id: number) => void;
  onToggleCompleted: () => void;
  onEdit: () => void;
})

//Renders the items details and action buttons
{
  return (
    <div className="bg-white m-3 p-3 border rounded d-flex justify-content-between align-items-center">
      <span>
        {itemName} - Quantity: {quantity}{" "}
        {completed ? (
          <span style={{ color: "green" }}>✔️</span> 
        ) : (
          <span style={{ color: "red" }}>❌</span> 
        )}
      </span>

      <div>
        
        <button //button to toggle the completed status of the item
          onClick={onToggleCompleted}
          className="btn btn-success btn-sm me-2"
        >
          {completed ? "Not Completed" : "Completed"} 
        </button>

        <button //button to trigger the edit functionality
        onClick={onEdit}
        className="btn btn-warning btn-sm me-2">
          Edit
        </button>


        <button // button to delete the item from the cart
          onClick={() => onDelete(itemId)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
}





