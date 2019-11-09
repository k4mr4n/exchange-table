import React from 'react'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  }
}))

const HeroComponent = ({
  onFetch,
  onFetchWithError
}) => {
  const classes = useStyles()
  return (
    <div className={classes.heroContent}>
      <Container maxWidth='sm'>
        <Typography component='h1' variant='h2' align='center' color='textPrimary' gutterBottom>
              ExchangeRates
        </Typography>
        <Typography variant='h5' align='center' color='textSecondary' paragraph>
              Welcome to ExchangeRates factory
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify='center'>
            <Grid item>
              <Button variant='contained' color='primary' onClick={onFetch}>
                    Fetch Latest
              </Button>
            </Grid>
            <Grid item>
              <Button variant='outlined' color='primary' onClick={onFetchWithError}>
                    Fetch - with error :|
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}

export default HeroComponent
