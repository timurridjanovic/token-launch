import React from 'react'
import { shallow } from 'enzyme'
import test from 'ava'
import moment from 'moment'
import sinon from 'sinon'
import About from '.'

const comments = [
  { username: 'Victoria', message: 'bah, it\' okay...', date: moment('07/20/17', 'mm/dd/yy') },
  { username: 'Rachel', message: 'wow, this is awesome!', date: moment('07/15/17', 'mm/dd/yy') },
  {
    username: 'Roger',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem arcu, ' +
      'sagittis sed mattis at, molestie sit amet lectus. Nunc et magna sed sem ultricies porta. ' +
      'Proin eu lacus mattis, bibendum arcu eu, tincidunt sem. Proin non aliquam mi. Mauris a aliquam sapien. ' +
      'Praesent quis vestibulum nisl, vitae vehicula ipsum. Aenean augue ante, molestie in est nec, accumsan ultricies magna. ' +
      'Aliquam ultrices sodales congue. Donec aliquet, velit in varius varius, risus elit molestie massa, a eleifend mi metus sit amet ex.',
    date: moment('07/10/17', 'mm/dd/yy')
  },
  { username: 'Bobby', message: 'hey great campaign!', date: moment('07/01/17', 'mm/dd/yy') }
]

const onCommentSubmit = sinon.spy()

test('About renders accurately', t => {
  const component = shallow(
    <About
      onCommentSubmit={onCommentSubmit}
      comments={comments}
    />
  )

  const stickyHeader = component.find('StickyHeader')
  const aboutContainer = component.find('.about-container')
  t.is(stickyHeader.length, 1)
  t.deepEqual(stickyHeader.get(0).props.tabs, [ 'Campaign', 'FAQ', 'Comments' ])
  t.is(typeof stickyHeader.get(0).props.onTabUpdate, 'function')
  t.is(component.state().activeTab, 0)
  t.is(aboutContainer.find('h3').text(), 'About this project')
  t.is(aboutContainer.find('p').length, 12)

  component.setState({ activeTab: 1 })
  const newAboutContainer = component.find('.about-container')
  t.is(newAboutContainer.find('h3').text(), 'Frequently Asked Questions')
  t.is(newAboutContainer.find('p').length, 1)

  component.setState({ activeTab: 2 })
  const finalAboutContainer = component.find('.about-container')
  t.is(finalAboutContainer.find('h3').first().text(), 'Comments')
  t.is(finalAboutContainer.find('.comment').length, comments.length)

  const input = finalAboutContainer.find('.post-container input')
  const textarea = finalAboutContainer.find('.post-container textarea')
  const button = finalAboutContainer.find('.post-container button')
  t.is(input.length, 1)
  t.is(textarea.length, 1)
  t.is(button.length, 1)
  t.is(button.get(0).props.className.includes('pt-disabled'), true)

  input.simulate('change', { target: { value: 'Timmy'}})
  textarea.simulate('change', { target: { value: 'bla' }})
  const newButton = component.find('.post-container button')
  t.is(newButton.get(0).props.className.includes('pt-disabled'), false)
  t.is(onCommentSubmit.callCount, 0)
  newButton.at(0).simulate('click')
  t.is(onCommentSubmit.callCount, 1)
})
