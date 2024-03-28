import { expect, test } from '@jest/globals'
import { rgb } from '../for-test'

describe('Test function calcSum', () => {
  test('Корректное значение', () => {
    expect(rgb(1, 2, 3)).toBe('rgb(1, 2, 3)')
  })
  test('Меньше корректного значения', () => {
    expect(rgb(1, -2, 3)).toBe(null)
  })
  test('Больше корректного значения', () => {
    expect(rgb(1, 2, 342)).toBe(null)
  })
})
