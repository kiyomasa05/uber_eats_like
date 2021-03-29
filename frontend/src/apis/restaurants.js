import axios from 'axios';
import { restaurantsIndex } from '../urls/index'
//importした文字列に対してaxios.getでHTTPリクエスト

export const fetchRestaurants = () => {
  // axios.getの引数には文字列が必要
  // HTTPリクエスト先のURL文字列が必要
  return axios.get(restaurantsIndex)
    .then(res => {//成功時返り値をresで取得res.dataで中身だけをreturn
      return res.data
    })
    .catch((e) => console.error(e))//失敗時にはエラーを吐き出す
}
