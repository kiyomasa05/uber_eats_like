import axios from 'axios';
import { restaurantsIndex } from '../urls/index'
//importした文字列に対してaxios.getでHTTPリクエスト

export const fetchRestaurants = () => {
  //fetchRestaurant関数を定義し、外で使えるように
  // axios.getの引数には文字列が必要
  // HTTPリクエスト先のURL文字列が必要
  return axios.get(restaurantsIndex)//indexはindexで定義したURLhttp://localhost:3000/api/v1'のこと
    .then(res => {//成功時返り値をresで取得res.dataで中身だけをreturn
      return res.data
    })
    .catch((e) => console.error(e))//失敗時にはエラーを吐き出す
}
