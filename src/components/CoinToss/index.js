import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    isHeads: true,
    headsCount: 0,
    tailsCount: 0,
  }

  tossCoin = () => {
    const {isHeads, headsCount, tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)

    let latestHeads = headsCount
    let latestTails = tailsCount

    if (tossResult === 0) {
      this.setState(prevState => ({
        isHeads: prevState,
      }))
      latestHeads += 1
    } else {
      this.setState(prevState => ({
        isHeads: !prevState,
      }))
      latestTails += 1
    }

    this.setState({
      headsCount: latestHeads,
      tailsCount: latestTails,
    })
  }

  render() {
    const {isHeads, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="bg">
        <div className="container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>

          {isHeads ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              className="image"
              alt="toss result"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              className="image"
              alt="toss result"
            />
          )}

          <button type="button" onClick={this.tossCoin} className="butt">
            Toss Coin
          </button>
          <div>
            <p>Total: {totalCount}</p>
            <p>Heads: {headsCount}</p>
            <p>Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
