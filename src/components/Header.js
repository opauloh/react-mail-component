import React from 'react';
import { MjmlSection, MjmlColumn, MjmlText } from 'mjml-react';

export const Header = ({ title }) => (
  <>
    <MjmlSection padding="2rem 0 2rem 0" backgroundColor="#20639B">
      <MjmlColumn>
        <MjmlText
          fontWeight="900"
          fontFamily="Roboto, Arial, sans-serif"
          fontSize="1.4rem"
          lineHeight="1.6rem"
          color="#FFFFFF"
          paddingTop="1rem"
          paddingBottom="1rem"
          paddingRight="3rem"
          paddingLeft="2rem">
          {title}
        </MjmlText>
      </MjmlColumn>
    </MjmlSection>
  </>
);

export default Header;
