import React from 'react'
import { useSelector } from 'react-redux'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import FormHelperText from '@material-ui/core/FormHelperText'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import ExchangeRatesComponent from '../components/exchange-rates.component'
import LoadingComponent from '../components/loading.component'
import RatesTableComponent from '../components/rates-table.component'

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    paddingTop: spacing(8),
    paddingBottom: spacing(8)
  },
  center: {
    textAlign: 'center'
  }
}))

const RatesTableView = () => {
  const classes = useStyles()
  const { data: { base, rates }, isLoading, error, updatedAt } = useSelector(state => state.rates)

  // Loading State
  if (isLoading) {
    return (
      <Box py={8} className={classes.center}>
        <LoadingComponent />
        <Typography>Loading...</Typography>
      </Box>
    )
  }

  // Error State
  if (error) {
    return (
      <Box py={8} className={classes.center}>
        <Typography color='error'>{error}</Typography>
      </Box>
    )
  }

  // Empty State
  if (!rates) {
    return (
      <Box py={8} className={classes.center}>
        <Typography>Please use above buttons to fetch some rates...</Typography>
      </Box>
    )
  }

  return (
    <Container className={classes.root} maxWidth='md'>
      <FormHelperText className={classes.center}>Last Update: {updatedAt.toTimeString()}</FormHelperText>
      <Grid container spacing={8} justify='center'>
        <Grid item>
          <RatesTableComponent base={base} rates={rates} />
        </Grid>
        <Grid item>
          <ExchangeRatesComponent base={base} rates={rates} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default RatesTableView
