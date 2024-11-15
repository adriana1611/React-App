import { Modal, Button, Form } from "react-bootstrap";
import { useState, useEffect, ChangeEvent } from "react";

//ItemFormModal handles both adding new items and editing existing ones
export default function ItemFormModal({
  show,
  handleClose,
  addItemToCart,
  updateItemInCart,
  editItem,
}: {
  show: boolean;
  handleClose: () => void;
  addItemToCart: (name: string, quantity: string) => void;
  updateItemInCart?: (id: number, name: string, quantity: string) => void;
  editItem?: { id: number; name: string; quantity: string } | null;
}) {


//State for managing the input fields value
  const [inputValue, setInputValue] = useState("");

//State for managing the quantity fields value
  const [quantity, setQuantity] = useState(""); //new


//Function to handle changes to the quantity input field
const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => { //new
  setQuantity(event.target.value);
};

//Populate the form fields with the editItems data when its provided
  useEffect(() => {
    if (editItem) {
      setInputValue(editItem.name);
      setQuantity(editItem.quantity);
    }
  }, [editItem]);


//Function to handle changes to the item name input field
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };


//Function to handle form submission
  const handleSubmit = () => {
    if (editItem  && updateItemInCart) {
      updateItemInCart(editItem.id, inputValue, quantity );
    } else {
      addItemToCart(inputValue, quantity);
    }
    setInputValue("");
    setQuantity("");
    handleClose();
  };


  //Modal header for add or edit
  //Form for entering item details
  //Input field for the items name
  //Input field for the items quantity
  //Button to cancel & close the modal
  //Button to submit form
    return (
        <Modal show= {show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{editItem ? "Edit Item" : "Add Item"}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ paddingTop: "20px", paddingBottom: "20px"}}>
                <Form>
                    <Form.Group controlId="formItemName" className="mb-3">
                        <Form.Label>Item Name:</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Enter item name"
                        value={inputValue}
                        onChange={handleInputChange}
                        className="mb-3"
                        />
                    </Form.Group>

                    <Form.Group controlId="formItemQuantity" className="mb-3">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Enter quantity"
                        value={quantity}
                        onChange={handleQuantityChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className="mt-3">
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleSubmit} disabled={!inputValue.trim()}>
                    {editItem ? "Update Item" : "Add Item"}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}