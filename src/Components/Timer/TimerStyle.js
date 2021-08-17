import styled from 'styled-components';

const DateContainer = styled.div`
  ${({ theme }) => theme.flexSet()};
  height: 50px;
  font-size: large;
`;

export const style = {
  DateContainer,
};
