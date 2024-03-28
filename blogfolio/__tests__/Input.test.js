import { expect, test, jest } from '@jest/globals'
import { fireEvent, render, screen } from '@testing-library/react'
import { Input } from '../src/components/Input'


const onChange = jest.fn()

describe('Input component', () => {
  test('Placeholder', () => {
    render(<Input placeholder='Input'/>)

    expect(screen.getByPlaceholderText(/input/i)).toBeInTheDocument()
  })
  // test('onChange', () => {
  //   render(<Input placeholder='Input' onChange={onChange}/>)
  //   expect(screen.getByPlaceholderText(/input/i)).toBeInTheDocument()
  //   fireEvent.change(screen.getByPlaceholderText(/input/i), 'input')
  //   expect(onChange).toHaveBeenCalledTimes(1)
  // })
})
