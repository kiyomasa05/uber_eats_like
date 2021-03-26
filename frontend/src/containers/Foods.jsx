import React, { Fragment } from 'react';

export const Foods = ({
  match
  //matchオブジェクトを受け取り、match.params.hogeのかたちでパラメーターを抽出
}) => {
  return (
    <Fragment>
      フード一覧
      <p>
        restaurantsIdは{match.params.restaurantsId}です
      </p>
    </Fragment>
  )
}
// /restaurants/1/foodsのようなURLでアクセスが来た場合に、「restaurantsIdは 1 です」という文字列が画面に表示される
