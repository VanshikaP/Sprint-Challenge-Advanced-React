import {render, fireEvent} from '@testing-library/react'
import React from 'react'

import App from '../App'
import Players from './Players'
import NavBar from './NavBar'

test('renders Players', () => {
    const { getByText, findByText } = render(<App />)

    const players = getByText('View All Players')
    fireEvent.click(players);

    const testPlayer = findByText('Alex Morgan')

    // expect(testPlayer).to
})