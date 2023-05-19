import './WrapperComponent.scss'

const WrapperComponent = ({className, children}) => {
  return (
    <div className={`content-wrapper ${className}`}>{children}</div>
  )
}

export default WrapperComponent;