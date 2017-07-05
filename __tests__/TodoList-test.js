import React from 'react'
import {} from 'react-native'

import TodoList from '../TodoList'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(<TodoList />).toJSON()
  expect(tree).toMatchSnapshot()
})
