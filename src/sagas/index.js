import { all, takeLatest } from 'redux-saga/effects'

/* ------------- Types ------------- */
import { RatesTypes } from '../actions/rates.actions'

/* ------------- Sagas ------------- */
import { fetchLatestRates } from './rates.saga'

export default function * rootSaga () {
  yield all([
    takeLatest(RatesTypes.FETCH_LATEST, fetchLatestRates)
  ])
}
