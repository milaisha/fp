import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItem = ({ newItem, setNewItem, handlesubmit}) => {
    const inputRef =useRef();
    return (
        <form className='addForm' onSubmit={handlesubmit(e)}>
            <label htmlFor='addItem'>Add Item</label>
            <input
            autoFocus
            ref={inputRef}
            id='addItem'
            type='Text'
            placeholder='Add Item'
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            />
            <button
            type='submit'
            aria-label='Add Item'
            onClick={()=> inputRef.current()}
            >
                <FaPlus />
            </button>
        </form>
    )
}

export default AddItems
