import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { style } from './ToastMessageStyle';

export default function ToastMessage({ show, contents }) {
  return createPortal(
    <>
      {show && (
        <Container>
          <Wrap>
            <Header>
              <Contents>{contents}</Contents>
            </Header>
          </Wrap>
        </Container>
      )}
    </>,
    document.getElementById('toast-root'),
  );
}

ToastMessage.propTypes = {
  show: PropTypes.bool,
  contents: PropTypes.string,
};

const { Container, Wrap, Header, Contents } = style;
