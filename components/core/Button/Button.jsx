import React from 'react';
import PropTypes from 'prop-types';

import {
    ButtonWrapper,
    ButtonText,
  } from './Styled';
  
  const Button = ({
    className,
    type,
    onClick,
    children,
  }) => (
    <ButtonWrapper
      className={className}
      type={type}
      onClick={onClick || undefined}
    >
      <ButtonText>{children}</ButtonText>
    </ButtonWrapper>
  );
  
  Button.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  };
  
  Button.defaultProps = {
    className: 'primary',
    type: 'button',
    onClick: null,
    children: null,
  };
  
  export default Button;