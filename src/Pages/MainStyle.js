import styled from 'styled-components';

export const Layout = styled.div`
  ${({ theme }) => theme.flexSet()};
  margin-top: 50px;
`;

export const Wrap = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'column')};
  max-width: 480px;
  width: 480px;
  margin: 48px 0;
  padding: 0 15px;
  margin-top: 50px;
`;

export const style = {
  Layout,
  Wrap,
};
