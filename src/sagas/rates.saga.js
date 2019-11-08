import { put, call } from 'redux-saga/effects'
import ApiInstance from '../api/instance'

import RatesActions from '../actions/rates.actions'
import { INITIAL_STATE as RatesInitialState } from '../redux/rates.reducer'

export function * fetchLatestRates () {
  yield put(RatesActions.setError(RatesInitialState.error))
  yield put(RatesActions.setLoading(true))
  const response = yield call(ApiInstance.getLatestRates)
  yield put(RatesActions.setLoading(false))

  const { status, data } = response
  if (status === 200) {
    yield put(RatesActions.set(response.data))
  } else {
    const message = data || 'something went wrong'
    yield put(RatesActions.set(RatesInitialState.data))
    yield put(RatesActions.setError(message))
  }
}
