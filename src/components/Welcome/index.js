import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  subscribeButton = () => {
    this.setState(prevstate => ({isSubscribed: !prevstate.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const name = this.getButtonText()

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! happy learning</p>
        <button className="button" type="button" onClick={this.subscribeButton}>
          {name}
        </button>
      </div>
    )
  }
}

export default Welcome
