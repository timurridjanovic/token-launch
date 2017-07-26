import { JSDOM } from 'jsdom'
import videojs from 'video.js'
import mockCssModules from 'mock-css-modules'
import 'babel-polyfill'

mockCssModules.register(['.sass', '.scss', '.css'])
const jsdom = new JSDOM('<!doctype html><html><body></body></html>')
const { window } = jsdom

function copyProps (src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(src, prop))
  Object.defineProperties(target, props)
}

global.window = window
global.document = window.document
const keys = [
  'DocumentFragment',
  'Event',
  'KeyboardEvent',
  'MouseEvent',
  'self'
]
keys.forEach((key) => {
  global[key] = document.defaultView[key]
})
global.navigator = {
  userAgent: 'node.js'
}
copyProps(window, global)
window.videojs = videojs
