import React from 'react'
import { shallow } from 'enzyme'
import test from 'ava'
import moment from 'moment'
import sinon from 'sinon'
import Header from '.'

const user = { username: 'Timur' }

test('Header renders accurately', t => {
  const component = shallow(
    <Header
      user={user}
    />
  )

  const userContainer = component.find('.user-container')
  t.is(userContainer.children().at(1).text(), `By ${user.username}`)
  t.is(component.state().overlayOpen, false)
  userContainer.simulate('click')
  t.is(component.state().overlayOpen, true)
  t.is(component.find('.title-container h1').text(), 'Consensys Token Launch')
  t.is(component.find(
    '.title-container .subtitle').text(),
    'This token is a disruptive, encrypted all-in-one network for xyz based on blockchain technology'
  )
  t.is(component.find('Overlay .user h3').text(), user.username)
  t.is(component.find('Overlay .title').text(), 'About the creator')
  t.is(component.find('Overlay p').length, 1)
  component.find('Overlay button').simulate('click')
  t.is(component.state().overlayOpen, false)
})
