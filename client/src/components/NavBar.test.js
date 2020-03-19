import React from 'react'
import {render} from '@testing-library/react'

import NavBar from './NavBar'

test('renders NavBar', () => {
    const { getByText } = render(<NavBar />)

    //Test for header
    const header = getByText('Women World Cup')

    //Test for Players Link
    const players = getByText('View All Players')

    //Test for Countries Link
    const countries = getByText('Players by Country')

    // expect(players).toBeInTheDocument();

})