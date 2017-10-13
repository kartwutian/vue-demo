import axios from 'axios'
import Url from './url'

axios.defaults.baseURL = '/src';

export function queryShopInfo (){
  return axios({
    url: Url.queryShopInfo,
    method: 'post',
    data: {
      jsonBody: {
        id: 69164
      }
    },
    headers: {'Content-Type': 'application/json'}
  })
}
