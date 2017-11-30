import fetch from '../utils/fetch'

export default {
  getList: () => {
    console.log('start fetch: ', fetch)
    return fetch('/')
  }
}
