import React from 'react';

import {
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlBody,
  MjmlStyle,
  MjmlAttributes,
  MjmlFont
} from 'mjml-react';
import { defaultStyle } from '../styles/default';

export const Container = ({ children, styling = defaultStyle, title }) => (
  <Mjml>
    <MjmlHead>
      <MjmlTitle>{title}</MjmlTitle>
      <MjmlAttributes>
        <MjmlFont
          name="Roboto"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap"
        />
        <MjmlFont
          name="Roboto Mono"
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
        />
      </MjmlAttributes>
      {styling && <MjmlStyle inline>{styling}</MjmlStyle>}
    </MjmlHead>
    <MjmlBody>{children}</MjmlBody>
  </Mjml>
);

export default Container;
