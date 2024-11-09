export default function ItemCard({
  itemName,
  itemId,
  completed,
  onDelete,
  onToggleCompleted
}:

{
  itemName: string;
  itemId: number;
  completed: boolean;
  onDelete: (id: number) => void;
  onToggleCompleted: () => void;
})

//below we display item name and its completion status
{
  return (
    <div className="bg-white m-3 p-3 border rounded d-flex justify-content-between align-items-center">
      <span>
        {itemName}{" "}
        {completed ? (
          <span style={{ color: "green" }}>✔️</span> 
        ) : (
          <span style={{ color: "red" }}>❌</span> 
        )}
      </span>

      <div>
        
        <button // button to toggle the completed status & text change based on completion status 
          onClick={onToggleCompleted}
          className="btn btn-success btn-sm me-2"
        >
          {completed ? "Not Completed" : "Completed"} 
        </button>


        <button // to delete the item from the cart
          onClick={() => onDelete(itemId)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
}





