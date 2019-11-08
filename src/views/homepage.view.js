import React from 'react'
import { useDispatch } from 'react-redux'

import RatesActions from '../actions/rates.actions'
import HeaderComponent from '../components/header.component'
import HeroComponent from '../components/hero.component'
import RatesTableView from './rates-table.view'

const HomePageView = () => {
  const dispatch = useDispatch()

  const onFetchLatestRates = () => {
    dispatch(RatesActions.fetchLatest())
  }

  const onFetchWithError = () => {
    dispatch(RatesActions.setLoading(true))
    setTimeout(() => {
      dispatch(RatesActions.set({}))
      dispatch(RatesActions.setError('dummy error happened...'))
      dispatch(RatesActions.setLoading(false))
    }, 3000)
  }

  return (
    <>
      <HeaderComponent />
      <main>
        <HeroComponent
          onFetch={onFetchLatestRates}
          onFetchWithError={onFetchWithError}
        />
        <RatesTableView />
      </main>
    </>
  )
}

export default HomePageView
