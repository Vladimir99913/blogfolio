import { expect, test } from '@jest/globals'
import { positiveNumbers } from '../for-test'

describe('Test function positivNumbers', () => {
  test('Числовые значения', () => {
    expect(positiveNumbers([7, -4, 32, -90, 54, 32, -21])).toEqual([7, 32, 54, 32])
  })
  test('Строковые значения', () => {
    expect(positiveNumbers(['7', '-4', '32', '-90', '54', '32', '-21'])).toEqual([7, 32, 54, 32])
  })
  test('Отрицательные значения', () => {
    expect(positiveNumbers([-7, -4, -32, -90, -54, -32, -21])).toEqual([])
  })
  test('Смешанные значения', () => {
    expect(positiveNumbers([7, -4, null, -90, true, 32, undefined])).toEqual([7, 1, 32])
  })
})




