import React, { useReducer } from 'react'
import Box from '@material-ui/core/Box'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'

const reducer = (state, action) => {
  switch (action.type) {
    case 'set-base-value':
      return { ...state, baseValue: action.value }
    case 'select-rate':
      return { ...state, selectedRate: action.value }
    default:
      throw new Error()
  }
}

const ExchangeRatesComponent = ({ base, rates }) => {
  const currencies = Object.keys(rates)
  const initialState = {
    baseValue: 1,
    selectedRate: currencies[0]
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const { baseValue, selectedRate } = state

  const handleChange = type => (e) => {
    dispatch({ type, value: e.target.value })
  }

  const exchangeRate = baseValue * rates[selectedRate]

  return (
    <Box py={8}>
      <div>
        <TextField
          value={baseValue}
          onChange={handleChange('set-base-value')}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                {base}
              </InputAdornment>
            )
          }}
        />
      </div>
      <Box mt={2}>
        <FormControl>
          <Select
            value={selectedRate}
            onChange={handleChange('select-rate')}
            input={<Input />}
          >
            {
              currencies.map(c => (<MenuItem value={c} key={c}>{c}</MenuItem>))
            }
          </Select>
        </FormControl>
        <FormControl>
          <Input value={exchangeRate} readOnly />
        </FormControl>
      </Box>
    </Box>
  )
}

export default ExchangeRatesComponent
