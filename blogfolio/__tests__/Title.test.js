import { expect, test } from '@jest/globals'
import { fireEvent, render, screen } from '@testing-library/react'
import {Title} from '../src/components/Title'

describe('Title component', () => {
  test('Корректное значение', () => {
    render(<Title title = "Hello World!" />)

    expect(screen.getByText(/hello/i)).toBeInTheDocument()
  })
})
