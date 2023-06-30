import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = this.props
  const {value} = denominationDetails

  onClickDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-item">
      <button
        type="button"
        className="denomination-button"
        onClick={this.onClickDenomination}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
