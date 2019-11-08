import React from 'react'
import { useSelector } from 'react-redux'
import clsx from 'clsx'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import LoadingComponent from '../components/loading.component'
import { Typography, FormHelperText } from '@material-ui/core'

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    paddingTop: spacing(8),
    paddingBottom: spacing(8)
  },
  table: {
    maxWidth: 300,
    margin: 'auto'
  },
  center: {
    textAlign: 'center'
  }
}))

const RatesTableView = () => {
  const classes = useStyles()
  const { data: { base, rates }, isLoading, error, updatedAt } = useSelector(state => state.rates)
  const rootCenterClass = clsx(classes.root, classes.center)

  // Loading State
  if (isLoading) {
    return (
      <div className={rootCenterClass}>
        <LoadingComponent />
        <Typography>Loading...</Typography>
      </div>
    )
  }

  // Error State
  if (error) {
    return (
      <div className={rootCenterClass}>
        <Typography color='error'>{error}</Typography>
      </div>
    )
  }

  // Empty State
  if (!rates) {
    return (
      <div className={rootCenterClass}>
        <Typography>Please use above buttons to fetch some rates...</Typography>
      </div>
    )
  }

  return (
    <Container className={classes.root} maxWidth='md'>
      <FormHelperText className={classes.center}>Last Update: {updatedAt.toTimeString()}</FormHelperText>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Currency</TableCell>
            <TableCell align='right'>Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={base}>
            <TableCell component='th' scope='row'>
              <b>{base}</b>
            </TableCell>
            <TableCell align='right'><b>1</b></TableCell>
          </TableRow>
          {Object.entries(rates).map(([rate, value]) => (
            <TableRow key={rate}>
              <TableCell component='th' scope='row'>{rate}</TableCell>
              <TableCell align='right'>{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  )
}

export default RatesTableView
