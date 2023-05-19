import {useState} from "react";
import './Dropdown.scss';

const Dropdown = ({setFilter}) => {
  const [isOpen, setIsOpen] = useState(false)

  const dropdownOpenHandler = () => {
    setIsOpen((isOpen) => !isOpen)
  }

  const filterHandler = (event) => {
    setFilter(event.target.value)
  }

  return(
    <div className="dropdown">
      <button
        className="dropdown-button"
        type="dropdown"
        onClick={dropdownOpenHandler}
      >
        Filter
      </button>
      <select onClick={filterHandler} className={isOpen ? 'dropdown-container' : 'hide'}>
        <option className="dropdown-item">All</option>
        <option className="dropdown-item">Notes</option>
        <option className="dropdown-item">News</option>
      </select>
    </div>
  )
}

export default Dropdown;