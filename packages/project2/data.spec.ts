import { describe, test, expect } from 'vitest'
import data from './data.json'

describe('data', () => {
  test('should be an object', () => {
    expect(data).toBeTypeOf('object')
    expect(data.test).equals('test')
  })
})
