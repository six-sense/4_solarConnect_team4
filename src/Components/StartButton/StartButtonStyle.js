import styled from 'styled-components';

export const Button = styled.div`
  ${({ theme }) => theme.flexSet()};
  height: 44px;
  background-color: #0085fd;
  cursor: pointer;
  color: #fff;
  font-size: 14px;
  border-radius: 6px;
`;

export const CheckBtn = styled(Button)`
  width: 100%;
`;

export const style = {
  CheckBtn,
};
