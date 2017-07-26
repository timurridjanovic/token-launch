import * as React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import { Overlay } from '@blueprintjs/core'
import './styles.scss'

class Intro extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      overlayOpen: false,
      contribution: 0,
      timeLeft: props.contributions.timeLeft
    }

    this._openOverlay = this._openOverlay.bind(this)
    this._closeOverlay = this._closeOverlay.bind(this)
    this._onContributionChange = this._onContributionChange.bind(this)
    this._onSubmitContribution = this._onSubmitContribution.bind(this)
    this._timer = this._timer.bind(this)
  }

  componentDidMount () {
    const intervalId = setInterval(this._timer, 1000)
    window.videojs(this.player)
    this.setState({ intervalId })
  }

  componentWillUnmount () {
     clearInterval(this.state.intervalId)
  }

  _timer () {
    if (this.state.timeLeft > 0) {
      this.setState(ps => ({ timeLeft: ps.timeLeft - 1 }))
    } else {
      clearInterval(this.state.intervalId)
    }
  }

  _formatTime (timeInSeconds) {
    const format = (n) => n === 0 ? '00' : n
    const duration = moment.duration(timeInSeconds, 'seconds')
    const daysInHours = duration.days() * 24
    const hours = format(duration.hours() + daysInHours)
    const minutes = format(duration.minutes())
    const seconds = format(duration.seconds())
    return `${hours}:${minutes}:${seconds}`
  }

  _formatNumbers (n) {
    return n.toLocaleString()
  }

  _onSubmitContribution () {
    this.props.onContributionSubmit(parseInt(this.state.contribution))
    this._closeOverlay()
  }

  _onContributionChange (e) {
    this.setState({ contribution: e.target.value })
  }

  _openOverlay () {
    this.setState({ overlayOpen: true })
  }

  _closeOverlay () {
    this.setState({ overlayOpen: false })
  }

  render () {
    const { contribution, timeLeft } = this.state
    const { contributions } = this.props
    const isNotNumber = isNaN(parseInt(contribution))
    const gtZero = !isNotNumber && parseInt(contribution) > 0
    const progress = Math.min(contributions.totalContribution / contributions.totalGoal, 1)
    const blueLine = progress * 100 + '%'
    const disabled = isNotNumber || !gtZero || timeLeft <= 0
    return (
      <div className='intro-container'>
        <div className='video-container'>
          <video
            id={'intro-video'}
            ref={(player) => this.player = player}
            tabIndex={1}
            width={600}
            height={400}
            className={`video-js vjs-matrix`}
            controls
            data-setup='{ "inactivityTimeout": 0, "fluid": true, "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/embed/hH7nxgAbQt0"}] }'
            style={{ margin: '0 auto' }} >
          </video>
        </div>
        <div className='stats-container'>
          <div className='wrapper'>
            <div className='progress-bar-blue' style={{ width: blueLine }}></div>
            <div className='progress-bar-gray'></div>
            <h3 className='total-contribution-title title'>Ξ{this._formatNumbers(contributions.totalContribution)}</h3>
            <div>Pledged of Ξ{this._formatNumbers(contributions.totalGoal)} goal</div>
            <h3 className='title'>{this._formatNumbers(contributions.backers)}</h3>
            <div>Backers</div>
            <h3 className='title'>{this._formatTime(this.state.timeLeft)}</h3>
            <div>Time left</div>
            <button
              className='contribution-button'
              onClick={this._openOverlay}>Contribute</button>
          </div>
        </div>
        <Overlay isOpen={this.state.overlayOpen} onClose={this._closeOverlay}>
          <div className='pt-card contribution-overlay'>
            <button
              className='button-close'
              onClick={this._closeOverlay}>
              <span className='pt-icon-standard pt-icon-cross' />
            </button>
            <h3 className='title'>Pledge Amount</h3>
            <div>
              <div className='pledge-container'>
                <div className='wrapper'>
                  <span className='pt-icon-star star'></span>
                </div>
                <h5>Ξ{this._formatNumbers(1500)}+</h5>
                <p>Get tokens first and participate in the BETA testing phase</p>
              </div>
              <div className='pledge-container'>
                <div className='wrapper'>
                  <span className='pt-icon-star star'></span>
                  <span className='pt-icon-star star'></span>
                </div>
                <h5>Ξ{this._formatNumbers(5000)}+</h5>
                <p>Enjoy a one year free subscription to our service</p>
              </div>
              <div className='pledge-container'>
                <div className='wrapper'>
                  <span className='pt-icon-star star'></span>
                  <span className='pt-icon-star star'></span>
                  <span className='pt-icon-star star'></span>
                </div>
                <h5>Ξ{this._formatNumbers(10000)}+</h5>
                <p>Get a 10% bonus in coins on top of your purchase</p>
              </div>
              <div className='pledge-container'>
                <div className='wrapper'>
                  <span className='pt-icon-star star'></span>
                  <span className='pt-icon-star star'></span>
                  <span className='pt-icon-star star'></span>
                  <span className='pt-icon-star star'></span>
                </div>
                <h5>Ξ{this._formatNumbers(25000)}+</h5>
                <p>Get an invitation to the token launch and explore opportunities to become a distribution partner</p>
              </div>
            </div>
            <input
              value={this.state.contribution}
              onChange={this._onContributionChange}
              type='number' />
            <button
              onClick={() => !disabled && this._onSubmitContribution()}
              className={`contribution-button-overlay pt-button pt-large ${disabled ? 'pt-disabled' : ''}`}>Contribute</button>
          </div>
        </Overlay>
      </div>
    )
  }
}

Intro.propTypes = {
  contributions: PropTypes.shape({
    totalContribution: PropTypes.number.isRequired,
    totalGoal: PropTypes.number.isRequired,
    backers: PropTypes.number.isRequired,
    timeLeft: PropTypes.number.isRequired
  }),
  onContributionSubmit: PropTypes.func.isRequired
}

export default Intro
