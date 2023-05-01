// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  withdraw = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg-container">
        <div className="card">
          <div className="container-1">
            <h1 className="profile">S</h1>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="container-2">
            <p className="text-a">Your Balance</p>
            <div>
              <p className="balance">{balance}</p>
              <p className="text-b">in Rupees</p>
            </div>
          </div>
          <p className="text-c">Withdraw</p>
          <p className="text-a">CHOOSE SUM (IN RUPEES)</p>
          <ul className="container-3">
            {denominationsList.map(denomination => (
              <DenominationItem
                key={denomination.id}
                denomination={denomination}
                withdraw={this.withdraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
