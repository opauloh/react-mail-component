import React from 'react';
import { MjmlButton, MjmlColumn, MjmlSection } from 'mjml-react';

const Primary = ({ name, href }) => (
  <MjmlButton
    href={href}
    borderRadius="8px"
    padding="0 0"
    innerPadding="15px 10px"
    width="90%"
    backgroundColor="#20639B"
    color="#F6D55C">
    <span className="button_text">{name}</span>
  </MjmlButton>
);
const Secondary = ({ name, href }) => (
  <MjmlButton
    href={href}
    paddingBottom="20px"
    paddingTop="20px"
    borderRadius="8px"
    padding="0 0"
    innerPadding="14px 10px"
    width="90%"
    backgroundColor="#F6D55C"
    color="#20639B">
    <span className="button_text">{name}</span>
  </MjmlButton>
);

export const ButtonSection = ({ action }) => (
  <MjmlSection>
    <MjmlColumn width="100%">
      {action.map((btn, idx) => {
        switch (btn.color) {
          case 'secondary':
            return <Secondary key={idx} name={btn.name} href={btn.href} />;
          default:
            return <Primary key={idx} name={btn.name} href={btn.href} />;
        }
      })}
    </MjmlColumn>
  </MjmlSection>
);
