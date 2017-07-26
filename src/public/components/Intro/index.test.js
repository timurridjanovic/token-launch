import React from 'react'
import { shallow } from 'enzyme'
import test from 'ava'
import moment from 'moment'
import sinon from 'sinon'
import Intro from '.'

const contributions = {
  totalContribution: 65000,
  totalGoal: 200000,
  backers: 2000,
  timeLeft: 48 * 60 * 60
}
const onContributionSubmit = sinon.spy()

const formatTime = (timeInSeconds) => {
  const format = (n) => n === 0 ? '00' : n
  const duration = moment.duration(timeInSeconds, 'seconds')
  const daysInHours = duration.days() * 24
  const hours = format(duration.hours() + daysInHours)
  const minutes = format(duration.minutes())
  const seconds = format(duration.seconds())
  return `${hours}:${minutes}:${seconds}`
}

test('Intro renders accurately', t => {
  const component = shallow(
    <Intro
      contributions={contributions}
      onContributionSubmit={onContributionSubmit}
    />
  )

  t.is(component.find('video').length, 1)
  t.deepEqual(
    JSON.parse(component.find('video').get(0).props['data-setup']).sources[0],
    { type: 'video/youtube', src: 'https://www.youtube.com/embed/hH7nxgAbQt0' }
  )
  const progress = (contributions.totalContribution / contributions.totalGoal) * 100 + '%'
  t.is(component.find('.progress-bar-blue').get(0).props.style.width, progress)
  t.is(component.find('.total-contribution-title').text(), `Ξ${contributions.totalContribution.toLocaleString()}`)
  t.is(component.find('.stats-container h3.title').at(1).text(), `${contributions.backers.toLocaleString()}`)
  t.is(component.find('.stats-container h3.title').at(2).text(), formatTime(contributions.timeLeft))
  t.is(component.find('.stats-container button').length, 1)
  t.is(component.state().overlayOpen, false)
  component.find('.stats-container button').simulate('click')
  t.is(component.state().overlayOpen, true)
  t.is(onContributionSubmit.callCount, 0)
  t.is(component.find('Overlay button').get(1).props.className.includes('pt-disabled'), true)
  component.find('Overlay input').simulate('change', { target: { value: '5000' } })
  t.is(component.find('Overlay button').get(1).props.className.includes('pt-disabled'), false)
  component.find('Overlay button').at(1).simulate('click')
  t.is(onContributionSubmit.callCount, 1)
  const timer = sinon.useFakeTimers()
  timer.tick(2000)
  component.update()
  console.log(component.state())
})
