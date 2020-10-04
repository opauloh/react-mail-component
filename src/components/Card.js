import React from 'react';
import { MjmlColumn, MjmlDivider, MjmlHero, MjmlSection, MjmlText } from 'mjml-react';

const Card = ({ children, ...props }) => <MjmlColumn {...props}>{children}</MjmlColumn>;

Card.Title = ({ children, ...props }) => <MjmlText {...props}>{children}</MjmlText>;

Card.Description = ({ children, ...props }) => <MjmlText {...props}>{children}</MjmlText>;

Card.Action = ({ href, children, ...props }) => (
  <MjmlText {...props}>
    <a href={href}>{children}</a>
  </MjmlText>
);

Card.Cover = ({ children, ...props }) => (
  <MjmlColumn width="100%" {...props}>
    {children}
  </MjmlColumn>
);

export default Card;
