import React from 'react'
import { render } from '@testing-library/react'

import HeaderComponent from './header.component'

test('Header Component', async () => {
  const { baseElement } = render(<HeaderComponent />)

  expect(baseElement).toMatchSnapshot()
})
