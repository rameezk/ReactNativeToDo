import React from 'react'
import {} from 'react-native'
import Index from '../index.ios.js'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(<Index />).toJSON()
  expect(tree).toMatchSnapshot()
})
