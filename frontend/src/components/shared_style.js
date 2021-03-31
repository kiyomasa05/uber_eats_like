import styled from 'styled-components';

//constains
import { COLORS } from '../style_constants';
//ボタンの元となるコンポーネント
export const BaseButton = styled.button`
cursor:pointer;
:hover{
  opacity:.7;
}
:focus{
  outline:0;
}
`;

//角丸なボタン
//BaseButton継承
export const RoundButton = styled(BaseButton)`
width:42px;
height:42px;
border-radius:50%;
border:none;
background-color:${COLORS.SUB_BUTTON};
`;

