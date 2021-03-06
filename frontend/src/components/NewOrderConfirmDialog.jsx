import React from 'react';

//component
import { DialogContent, Dialog, DialogTitle } from '@material-ui/core';
import { OrderButton } from './Buttons/OrderButton';

export const NewOrderConfirmDialog = ({//引数
  isOpen,
  onClose,
  existingRestaurantName,//他店舗のレストラン名
  newRestaurantName,//今選択した店舗のなまえ
  onClickSubmit,//仮注文の置き換えAPIを呼ぶ
}) => (
  <Dialog
    open={isOpen}
    onClose={onClose}
    maxWidth="xs"
  >
    <DialogTitle>
      新規注文を開始しますか？
    </DialogTitle>
    <DialogContent>
      <p>
        {
          `ご注文に ${existingRestaurantName} の商品が含まれています。
          新規の注文を開始して ${newRestaurantName} の商品を追加してください。`
        }
      </p>
      <OrderButton onClick={onClickSubmit}>
        新規注文
      </OrderButton>
    </DialogContent>
  </Dialog>
);
