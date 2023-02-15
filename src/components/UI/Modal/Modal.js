import './Modal.scss';
import WrapperComponent from "../WrapperComponent/WrapperComponent";
import Button from "../Button/Button";

const Modal = props => {
  return(
    <div className="modal-wrapper" onClick={()=>console.log('modal wrapper clicked')}>
      <form className="modal-body__wrapper">
        <header className="modal-header">
          <h1>{props.summary}</h1>
        </header>

        <p className="text-center modal-text">{props.message}</p>

        <footer className="modal-footer">
          <Button
            className="modal-button"
            type="submit"
            onClick={()=>console.log('modal button clicked')}
          >
            Ok
          </Button>
        </footer>

      </form>
    </div>
  )
}

export default Modal;