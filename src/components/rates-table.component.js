import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const useStyles = makeStyles(({ spacing }) => ({
  table: {
    maxWidth: 350,
    margin: 'auto'
  },
  center: {
    textAlign: 'center'
  }
}))

const RatesTableComponent = ({ base, rates }) => {
  const classes = useStyles()
  return (
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
  )
}

export default RatesTableComponent
