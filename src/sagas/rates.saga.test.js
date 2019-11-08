import { put, call } from 'redux-saga/effects'
import { cloneableGenerator } from '@redux-saga/testing-utils'

import ApiInstance from '../api/instance'
import { fetchLatestRates } from './rates.saga'
import RatesActions from '../actions/rates.actions'
import { INITIAL_STATE as RatesInitialState } from '../redux/rates.reducer'

describe('Rates saga test', () => {
  const gen = cloneableGenerator(fetchLatestRates)()

  it('should call fetch latest rates', () => {
    expect(gen.next().value).toEqual(put(RatesActions.setError(RatesInitialState.error)))
    expect(gen.next().value).toEqual(put(RatesActions.setLoading(true)))
    expect(gen.next().value).toEqual(call(ApiInstance.getLatestRates))
  })

  it('should be success', () => {
    const clone = gen.clone()
    const mockResponse = { status: 200, data: { data: [1, 2, 3] } }

    expect(clone.next(mockResponse).value).toEqual(put(RatesActions.setLoading(false)))
    expect(clone.next().value).toEqual(put(RatesActions.set(mockResponse.data)))
    expect(clone.next().done).toBeTruthy()
  })

  it('should fail', () => {
    const clone = gen.clone()
    const response = { status: 500, data: 'some error' }
    expect(clone.next(response).value).toEqual(put(RatesActions.setLoading(false)))
    expect(clone.next().value).toEqual(put(RatesActions.set(RatesInitialState.data)))
    expect(clone.next().value).toEqual(put(RatesActions.setError(response.data)))
    expect(clone.next().done).toBeTruthy()
  })
})
