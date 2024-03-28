import { expect, test } from '@jest/globals'
import { calcSum } from '../for-test'

test('Test function calcSum', () => {
  expect(calcSum(1, 2)).toBe(3)
  expect(calcSum(12, 99)).toBe(111)
  expect(calcSum(-16, -5)).toBe(-21)
  expect(calcSum(0, Infinity)).toBe(Infinity)
  expect(calcSum(NaN, 12)).toBe(NaN)
})
