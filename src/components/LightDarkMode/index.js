// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  changeMode = () => {
    const {isDarkMode} = this.state

    this.setState({isDarkMode: !isDarkMode})
  }

  render() {
    let modeCls
    const {isDarkMode} = this.state

    const modeTxt = isDarkMode
      ? ((modeCls = 'Dark Mode'), 'Light Mode')
      : ((modeCls = 'Light Mode'), 'Dark Mode')

    return (
      <div>
        <div className={modeCls}>
          <h1>Click To Change Mode</h1>
          <button type="button" onClick={this.changeMode}>
            {modeTxt}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
