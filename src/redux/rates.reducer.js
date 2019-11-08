import { createReducer } from 'reduxsauce'

import { RatesTypes as Types } from '../actions/rates.actions'

export const INITIAL_STATE = {
  data: {},
  updatedAt: null,
  isLoading: false,
  error: null
}

export const set = (state, { data }) => ({ ...state, data, updatedAt: new Date() })
export const setLoading = (state, { isLoading }) => ({ ...state, isLoading })
export const setError = (state, { message: error }) => ({ ...state, error })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET]: set,
  [Types.SET_LOADING]: setLoading,
  [Types.SET_ERROR]: setError
})

export default reducer
