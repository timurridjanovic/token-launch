import * as React from 'react'
import { Overlay } from '@blueprintjs/core'
import PropTypes from 'prop-types'
import './styles.scss'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      overlayOpen: false
    }

    this._openOverlay = this._openOverlay.bind(this)
    this._closeOverlay = this._closeOverlay.bind(this)
  }

  _openOverlay () {
    this.setState({ overlayOpen: true })
  }

  _closeOverlay () {
    this.setState({ overlayOpen: false })
  }

  render () {
    const { user } = this.props
    return (
      <div>
        <div className='header-container'>
          <div className='user-container' onClick={this._openOverlay}>
            <div className='pt-icon-standard pt-icon-user' />
            <div>By {user.username}</div>
          </div>
          <div className='title-container'>
            <h1>Consensys Token Launch</h1>
            <div className='subtitle'>This token is a disruptive, encrypted all-in-one network for xyz based on blockchain technology</div>
          </div>
        </div>
        <Overlay isOpen={this.state.overlayOpen} onClose={this._closeOverlay}>
          <div className='pt-card user-container-overlay'>
            <button
              className='button-close'
              onClick={this._closeOverlay}>
              <span className='pt-icon-standard pt-icon-cross' />
            </button>
            <div className='user'>
              <div className='pt-icon-standard pt-icon-user' />
              <h3>{user.username}</h3>
            </div>
            <h3 className='title'>About the creator</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem arcu, sagittis sed mattis at, molestie sit amet lectus. Nunc et magna sed sem ultricies porta. Proin eu lacus mattis, bibendum arcu eu, tincidunt sem. Proin non aliquam mi. Mauris a aliquam sapien. Praesent quis vestibulum nisl, vitae vehicula ipsum. Aenean augue ante, molestie in est nec, accumsan ultricies magna. Aliquam ultrices sodales congue. Donec aliquet, velit in varius varius, risus elit molestie massa, a eleifend mi metus sit amet ex.</p>
          </div>
        </Overlay>
      </div>
    )
  }
}

Header.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired
  })
}

export default Header
