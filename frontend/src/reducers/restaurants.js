import { REQUEST_STATE } from '../constants'

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  restaurantsList: [],
};

export const restaurantsActionTypes = {
  FETCHNG: 'FETCHING',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
}

export const restaurantsReducer = (state, action) => {
  switch (action.type) {//action.type（restaurantActionTypes）が
    case restaurantsActionTypes.FETCHING://FETCHINGの時
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case restaurantsActionTypes.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        restaurantsList: action.payload.restaurants,//更新する。引数actionの指定したpayload(restaurant)に入れる　使うrestaurant.JSX側で定義
      };
    default:
      throw new Error();
  }
}
