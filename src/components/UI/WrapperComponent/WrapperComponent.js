import './WrapperComponent.scss'

const WrapperComponent = props => {
  return <div className={`content-wrapper ${props.className}`}>{props.children}</div>
}

export default WrapperComponent;