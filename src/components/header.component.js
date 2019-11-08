import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  }
}))

const HeaderComponent = () => {
  const classes = useStyles()
  return (
    <AppBar position='relative'>
      <Toolbar>
        <Icon className={classes.icon}>trending_up</Icon>
        <Typography variant='h6' color='inherit' noWrap>
            ExchangeRates
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default HeaderComponent
