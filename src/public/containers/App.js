import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '../components/Header'
import Intro from '../components/Intro'
import About from '../components/About'
import Spinner from '../components/Spinner'
import { actionCreators } from '../actions'
import '../styles/styles.scss'

class App extends React.Component {
  componentWillMount () {
    this.props.actions.getHomePageData()
  }

  render () {
    const { user, loading, contributions, comments } = this.props
    if (loading) return <Spinner />
    return (
      <div className='app-container'>
        <Header user={user} />
        <Intro
          onContributionSubmit={this.props.actions.onContributionSubmit}
          contributions={contributions} />
        <About
          onCommentSubmit={this.props.actions.onCommentSubmit}
          comments={comments} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.user,
    loading: state.loading,
    contributions: state.contributions,
    comments: state.comments
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: {
      ...bindActionCreators(actionCreators, dispatch),
      dispatch
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
