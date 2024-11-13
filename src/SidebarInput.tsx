import { ChangeEvent } from "react";

// SidebarInput component that provides a text input field for user input
export default function SidebarInput({
  inputValue,
  onInputChange,
}: {
  inputValue: string;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
      <div className="p-3">
        <input type="text"
         className="form-control" 
         placeholder="Enter item"
         value={inputValue}
         onChange={onInputChange} />
      </div>
    );
  }
  
