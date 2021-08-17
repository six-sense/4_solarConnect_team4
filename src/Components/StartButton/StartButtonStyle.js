import styled from 'styled-components';

const Button = styled.div`
  ${({ theme }) => theme.flexSet()};
  height: 44px;
  background-color: black;
  cursor: pointer;
  color: #fff;
  font-size: 14px;
  border-radius: 6px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const CheckBtn = styled(Button)`
  width: 50%;
`;

export const style = {
  CheckBtn,
};
