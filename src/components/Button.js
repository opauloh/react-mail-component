import React from 'react';
import { MjmlButton } from 'mjml-react';

const Button = ({ children, href, ...props }) => (
  <MjmlButton
    href={href}
    borderRadius="8px"
    padding="0 0"
    paddingBottom="20px"
    innerPadding="15px 10px"
    width="90%"
    backgroundColor="#20639B"
    color="#F6D55C"
    border="1px solid transparent"
    {...props}>
    {children}
  </MjmlButton>
);

export default Button;
