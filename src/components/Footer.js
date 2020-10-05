import React from 'react';
import { MjmlSection, MjmlColumn, MjmlText } from 'mjml-react';

const Footer = ({ children, ...props }) => (
  <MjmlSection padding="40px" textAlign="left" backgroundColor="#20649B" {...props}>
    <MjmlColumn>{children}</MjmlColumn>
  </MjmlSection>
);

Footer.Text = ({ children, ...props }) => (
  <MjmlText
    padding="0px"
    color="#ffffff"
    fontFamily="Roboto, Arial, sans-serif"
    fontSize="16px"
    align="left"
    {...props}>
    {children}
  </MjmlText>
);

export default Footer;
