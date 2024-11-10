//button that triggers the addItemToCart function when clicked
export default function AddButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="d-flex justify-content-center">
      <button onClick={onClick} className="btn btn-secondary">
        Add Item
      </button>
    </div>
  );
}
