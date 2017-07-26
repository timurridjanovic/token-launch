import * as React from 'react'
import moment from 'moment'
import StickyHeader from '../StickyHeader'
import PropTypes from 'prop-types'
import './styles.scss'

class About extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      activeTab: 0,
      comment: '',
      username: ''
    }

    this._onTabUpdate = this._onTabUpdate.bind(this)
    this._onCommentChange = this._onCommentChange.bind(this)
    this._onUsernameChange = this._onUsernameChange.bind(this)
    this._onCommentSubmit = this._onCommentSubmit.bind(this)
  }

  _onTabUpdate (activeTab) {
    this.setState({ activeTab })
  }

  _onCommentChange (e) {
    const comment = e.target.value
    this.setState({ comment })
  }

  _onUsernameChange (e) {
    const username = e.target.value
    this.setState({ username })
  }

  _onCommentSubmit () {
    const { comment: message, username } = this.state
    const date = moment()
    const newComment = { message, username, date }
    this.props.onCommentSubmit(newComment)
  }

  render () {
    const { activeTab, comment, username } = this.state
    const { comments } = this.props
    const invalidUsername = !username.match(/^([a-zA-Z0-9'\-_]{3,20})$/) && username.trim().length > 0
    const disabledComment = comment.trim().length <= 0 || username.trim().length <= 0 || invalidUsername
    return (
      <div>
        <StickyHeader
          tabs={['Campaign', 'FAQ', 'Comments']}
          onTabUpdate={this._onTabUpdate} />
        <div className='about-container'>
          {activeTab === 0 &&
            <div>
              <h3>About this project</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem arcu, sagittis sed mattis at, molestie sit amet lectus. Nunc et magna sed sem ultricies porta. Proin eu lacus mattis, bibendum arcu eu, tincidunt sem. Proin non aliquam mi. Mauris a aliquam sapien. Praesent quis vestibulum nisl, vitae vehicula ipsum. Aenean augue ante, molestie in est nec, accumsan ultricies magna. Aliquam ultrices sodales congue. Donec aliquet, velit in varius varius, risus elit molestie massa, a eleifend mi metus sit amet ex.</p>
              <p>Duis libero nibh, egestas vitae blandit sed, efficitur a nunc. Quisque posuere non ante ac porta. Etiam condimentum vel dolor id congue. Sed iaculis ex id velit lacinia accumsan. Donec quis lacus risus. Fusce sed sollicitudin nisl, sed luctus ligula. Fusce blandit rutrum maximus. Donec sed lacinia mauris, posuere luctus nibh. Integer pulvinar erat et fermentum suscipit.</p>
              <p>Donec sit amet odio a odio ornare varius. Aenean vitae velit nisi. Quisque sit amet velit finibus, fringilla nulla nec, venenatis est. Maecenas tempor lobortis nisl. Vivamus vitae rutrum mauris. Aliquam accumsan suscipit vehicula. Curabitur eu turpis lorem. Proin odio purus, porta fringilla fringilla nec, ultricies eget enim. Vestibulum sem diam, rhoncus eu posuere nec, aliquet nec dui.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem arcu, sagittis sed mattis at, molestie sit amet lectus. Nunc et magna sed sem ultricies porta. Proin eu lacus mattis, bibendum arcu eu, tincidunt sem. Proin non aliquam mi. Mauris a aliquam sapien. Praesent quis vestibulum nisl, vitae vehicula ipsum. Aenean augue ante, molestie in est nec, accumsan ultricies magna. Aliquam ultrices sodales congue. Donec aliquet, velit in varius varius, risus elit molestie massa, a eleifend mi metus sit amet ex.</p>
              <p>Duis libero nibh, egestas vitae blandit sed, efficitur a nunc. Quisque posuere non ante ac porta. Etiam condimentum vel dolor id congue. Sed iaculis ex id velit lacinia accumsan. Donec quis lacus risus. Fusce sed sollicitudin nisl, sed luctus ligula. Fusce blandit rutrum maximus. Donec sed lacinia mauris, posuere luctus nibh. Integer pulvinar erat et fermentum suscipit.</p>
              <p>Donec sit amet odio a odio ornare varius. Aenean vitae velit nisi. Quisque sit amet velit finibus, fringilla nulla nec, venenatis est. Maecenas tempor lobortis nisl. Vivamus vitae rutrum mauris. Aliquam accumsan suscipit vehicula. Curabitur eu turpis lorem. Proin odio purus, porta fringilla fringilla nec, ultricies eget enim. Vestibulum sem diam, rhoncus eu posuere nec, aliquet nec dui.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem arcu, sagittis sed mattis at, molestie sit amet lectus. Nunc et magna sed sem ultricies porta. Proin eu lacus mattis, bibendum arcu eu, tincidunt sem. Proin non aliquam mi. Mauris a aliquam sapien. Praesent quis vestibulum nisl, vitae vehicula ipsum. Aenean augue ante, molestie in est nec, accumsan ultricies magna. Aliquam ultrices sodales congue. Donec aliquet, velit in varius varius, risus elit molestie massa, a eleifend mi metus sit amet ex.</p>
              <p>Duis libero nibh, egestas vitae blandit sed, efficitur a nunc. Quisque posuere non ante ac porta. Etiam condimentum vel dolor id congue. Sed iaculis ex id velit lacinia accumsan. Donec quis lacus risus. Fusce sed sollicitudin nisl, sed luctus ligula. Fusce blandit rutrum maximus. Donec sed lacinia mauris, posuere luctus nibh. Integer pulvinar erat et fermentum suscipit.</p>
              <p>Donec sit amet odio a odio ornare varius. Aenean vitae velit nisi. Quisque sit amet velit finibus, fringilla nulla nec, venenatis est. Maecenas tempor lobortis nisl. Vivamus vitae rutrum mauris. Aliquam accumsan suscipit vehicula. Curabitur eu turpis lorem. Proin odio purus, porta fringilla fringilla nec, ultricies eget enim. Vestibulum sem diam, rhoncus eu posuere nec, aliquet nec dui.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem arcu, sagittis sed mattis at, molestie sit amet lectus. Nunc et magna sed sem ultricies porta. Proin eu lacus mattis, bibendum arcu eu, tincidunt sem. Proin non aliquam mi. Mauris a aliquam sapien. Praesent quis vestibulum nisl, vitae vehicula ipsum. Aenean augue ante, molestie in est nec, accumsan ultricies magna. Aliquam ultrices sodales congue. Donec aliquet, velit in varius varius, risus elit molestie massa, a eleifend mi metus sit amet ex.</p>
              <p>Duis libero nibh, egestas vitae blandit sed, efficitur a nunc. Quisque posuere non ante ac porta. Etiam condimentum vel dolor id congue. Sed iaculis ex id velit lacinia accumsan. Donec quis lacus risus. Fusce sed sollicitudin nisl, sed luctus ligula. Fusce blandit rutrum maximus. Donec sed lacinia mauris, posuere luctus nibh. Integer pulvinar erat et fermentum suscipit.</p>
              <p>Donec sit amet odio a odio ornare varius. Aenean vitae velit nisi. Quisque sit amet velit finibus, fringilla nulla nec, venenatis est. Maecenas tempor lobortis nisl. Vivamus vitae rutrum mauris. Aliquam accumsan suscipit vehicula. Curabitur eu turpis lorem. Proin odio purus, porta fringilla fringilla nec, ultricies eget enim. Vestibulum sem diam, rhoncus eu posuere nec, aliquet nec dui.</p>
            </div>
          }
          {activeTab === 1 &&
            <div>
              <h3>Frequently Asked Questions</h3>
              <p>Looks like there aren't any frequently asked questions yet.</p>
            </div>
          }
          {activeTab === 2 &&
            <div>
              <h3>Comments</h3>
              {comments.map((comment, i) =>
                <div className='comment' key={i}>
                  <div className='comment-user'>
                    <span className='pt-icon-user' />
                    <span>{comment.username}</span>
                    <span className='date'>{comment.date.fromNow()}</span>
                  </div>
                  <div className='comment-message'>{comment.message}</div>
                </div>
              )}
              <div className='post-container'>
                <h3>Post a comment</h3>
                <input
                  placeholder='username'
                  value={this.state.username}
                  onChange={this._onUsernameChange}
                  type='text'
                  className={`${invalidUsername ? 'invalid' : ''}`} />
                <textarea
                  value={this.state.comment}
                  onChange={this._onCommentChange} />
                <button
                  onClick={() => !disabledComment && this._onCommentSubmit()}
                  className={`post-comment pt-button pt-large ${disabledComment ? 'pt-disabled' : ''}`}>Comment</button>
              </div>
            </div>
          }
        </div>
      </div>
    )
  }
}

About.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired
  })),
  onCommentSubmit: PropTypes.func.isRequired
}

export default About
