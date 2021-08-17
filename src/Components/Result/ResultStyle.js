import styled from 'styled-components';

export const Input = styled.input`
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;
  height: 44px;
  margin-top: 16px;
  margin-bottom: 16px;
  background-color: #fff;
  font-size: 12px;
  border: 1px solid rgba(154, 154, 154, 0.5);
  border-radius: 2px;
  -webkit-appearance: none !important;
  outline: none;
  opacity: 1 !important;
  &:focus,
  &:hover {
    color: #6dc043;
    border: solid 1px #a5d25f;
    background-color: rgba(165, 210, 95, 0.1);
  }
`;

export const ResultNumber = styled(Input).attrs({
  type: 'text',
})`
  height: 30px;
`;

export const style = {
  ResultNumber,
};
