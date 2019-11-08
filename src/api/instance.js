import BaseApi from './protected.api'

const ApiSingleton = (function () {
  let instance

  function init () {
    const exchangeApi = BaseApi('https://api.exchangeratesapi.io')

    const getLatestRates = () => exchangeApi.get('/latest')

    return {
      getLatestRates
    }
  }

  return {
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function () {
      if (!instance) {
        instance = init()
      }

      return instance
    }
  }
})()

export default ApiSingleton.getInstance()
