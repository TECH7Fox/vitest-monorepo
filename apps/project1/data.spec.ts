import { describe, test, expect } from 'vitest'
import data from './data.json'

describe('data', () => {
  test('should be an array', () => {
    expect(data).toBeTypeOf('object')
    expect(data[0]).equals('test')
  })
})
