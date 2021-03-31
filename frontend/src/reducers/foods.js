import { REQUEST_STATE } from '../constants';//ステータスコンポーネントを取得
export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,//初期設定
  foodsList: [],//foodList配列定義
};

export const foodsActionTypes = {
  FETCHING: 'FETCHING',
  FETCH_SUCCESS: 'FETCH_SUCCESS'
}

export const foodsReducer = (state, action) => {
  switch (action.type) {
    case foodsActionTypes.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case foodsActionTypes.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        foodsList: action.payload.foods,
      };
    default:
      throw new Error();
  }
}
