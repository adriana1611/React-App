// AddButton component
export default function AddButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="d-flex justify-content-center">
      <button onClick={onClick} className="btn btn-secondary">Add</button>
    </div>
  );
}


 