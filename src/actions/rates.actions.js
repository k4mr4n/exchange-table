import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  fetchLatest: null,
  set: ['data'],
  setLoading: ['isLoading'],
  setError: ['message']
}, { prefix: 'RATES_' })

export const RatesTypes = Types
export default Creators
