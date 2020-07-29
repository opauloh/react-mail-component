import React from 'react';
import { MjmlColumn, MjmlText } from 'mjml-react';

const Card = ({ title, description, action }) => (
  <MjmlColumn width="48%" backgroundColor="#e5e5e5" borderRadius="8px" cssClass="card">
    <MjmlText
      paddingTop="2rem"
      color="#000000"
      fontWeight="900"
      fontFamily="Roboto, Arial, sans-serif"
      fontSize="3rem"
      lineHeight="3.2rem">
      {title}
    </MjmlText>
    <MjmlText
      paddingTop="0.75rem"
      color="#000000"
      fontFamily="Roboto, Arial, sans-serif"
      fontSize="1rem"
      lineHeight="1.2rem">
      {description}
    </MjmlText>
    {action && (
      <MjmlText
        paddingBottom="1.5rem"
        fontSize="0.875rem"
        fontFamily="Roboto Mono, Arial, sans-serif">
        <a href={action.href} className="link-orange">
          {action.name}
        </a>
      </MjmlText>
    )}
  </MjmlColumn>
);

export default Card;
