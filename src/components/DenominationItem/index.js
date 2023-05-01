// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denomination, withdraw} = props
  const {value} = denomination

  const onWithdraw = event => {
    withdraw(event.target.value)
  }

  return (
    <li className="list-item">
      <button
        type="button"
        value={value}
        onClick={onWithdraw}
        className="button"
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
