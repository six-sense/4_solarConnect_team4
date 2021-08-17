import styled from 'styled-components';

const Input = styled.div`
  width: 100%;
`;

const ResultContainer = styled.div`
  width: 100%;
  height: 100px;
  overflow-y: auto;
  display: inline-block;
  margin: 0 auto;
  padding: 0 15px;
  margin-bottom: 16px;
  background-color: #fff;
  font-size: 12px;
  border: 1px solid rgba(154, 154, 154, 0.5);
  border-radius: 2px;
`;

const ResultNumber = styled(Input).attrs({
  type: 'text',
})``;

const ResultPlaceholder = styled.div`
  ${({ theme }) => theme.flexSet()};
  height: 100%;
  width: 100%;
  font-size: 12px;
  color: gray;
`;

export const style = {
  ResultNumber,
  ResultContainer,
  ResultPlaceholder,
};
