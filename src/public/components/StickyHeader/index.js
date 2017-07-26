import * as React from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'

class StickyHeader extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      activeSticky: false,
      activeTab: 0
    }

    this._handleScroll = this._handleScroll.bind(this)
    this._onTabUpdate = this._onTabUpdate.bind(this)
  }

  componentDidMount () {
    window.addEventListener("scroll", this._handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener("scroll", this._handleScroll)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextState.activeSticky !== this.state.activeSticky ||
      nextState.activeTab !== this.state.activeTab)
  }

  _handleScroll () {
    const doc = document.documentElement
    const top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0)
    if (!this.state.activeSticky) {
      const _top = ReactDOM.findDOMNode(this).offsetTop
      this.setState({ _top })
    }
    if (top >= this.state._top && !this.state.activeSticky) {
      this.setState({ activeSticky: true })
    } else if (top < this.state._top && this.state.activeSticky) {
      this.setState({ activeSticky: false })
    }
  }

  _onTabUpdate (activeTab) {
    this.setState({ activeTab })
    this.props.onTabUpdate(activeTab)
  }

  render () {
    const { activeTab } = this.state
    return (
      <div className={`sticky-header ${this.state.activeSticky ? 'active-sticky' : ''}`}>
        {this.props.tabs.map((tab, i) =>
          <div key={i}>
            <div
              key={i}
              onClick={() => this._onTabUpdate(i)}
              className='tab'>
              {tab}
            </div>
            <div className={`tab-underline ${activeTab === i ? 'active' : ''}`}></div>
        </div>
        )}
      </div>
    )
  }
}

export default StickyHeader
