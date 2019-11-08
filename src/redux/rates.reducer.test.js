import Actions from '../actions/rates.actions'
import reducer, { INITIAL_STATE } from './rates.reducer'

describe('Rates Reducer tests', () => {
  it('Should set rates data', () => {
    const data = { rates: [1, 2, 3], base: 'cure' }
    const data2 = { rates: [5, 6, 7], base: 'ency' }
    const state1 = reducer(undefined, Actions.set(data))
    expect(state1.data).toEqual(data)

    // without default state
    const state2 = reducer(state1, Actions.set(data2))
    expect(state2.data).toEqual(data2)
    expect(state1.data).toEqual(data)
    expect(INITIAL_STATE.data).toEqual({})
  })

  it('Should set loading state', () => {
    const state = reducer(undefined, Actions.setLoading(true))
    expect(state.isLoading).toBe(true)
    expect(INITIAL_STATE.isLoading).toBe(false)
  })

  it('Should set error state', () => {
    const err = 'error message'
    const state = reducer(undefined, Actions.setError(err))
    expect(state.error).toBe(err)
    expect(INITIAL_STATE.error).toBe(null)
  })
})
