import React from 'react';
import { MjmlSection, MjmlColumn, MjmlText } from 'mjml-react';

export const Footer = () => (
  <MjmlSection padding="40px" textAlign="left" backgroundColor="#20649B">
    <MjmlColumn>
      <MjmlText
        padding="0px"
        color="#ffffff"
        fontFamily="Roboto, Arial, sans-serif"
        fontSize="16px"
        align="left">
        Footer
      </MjmlText>
    </MjmlColumn>
  </MjmlSection>
);

export default Footer;
