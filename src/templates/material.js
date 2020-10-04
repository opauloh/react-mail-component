import React from 'react';

import { MjmlSection, MjmlColumn, MjmlText } from 'mjml-react';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Header from '../components/Header';
import Container from '../components/Container';
import Card from '../components/Card';

export const generate = ({ title, to_name, show_day, description, cards, action }) => {
  return (
    <Container title={title}>
      <Header title={title} name={to_name} showDay={show_day} />
      <MjmlSection backgroundColor="#ffffff">
        <MjmlColumn>
          {description &&
            description.map((desc, idx) => (
              <MjmlText
                key={idx}
                fontFamily="Roboto, Arial, sans-serif"
                fontSize="18px"
                lineHeight="22px">
                {desc}
              </MjmlText>
            ))}
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection
        textAlign="left"
        paddingBottom="10px"
        paddingTop="0px"
        padding="25px"
        backgroundColor="#ffffff">
        {cards &&
          cards.map((card, index) => (
            <React.Fragment key={index}>
              <Card width="100%" backgroundColor="#E1E2E1" cssClass="card">
                <Card.Cover backgroundColor="#3f51b5" padding={0}>
                  <Card.Title
                    color="#fff"
                    fontWeight="400"
                    fontFamily="Roboto, Arial, sans-serif"
                    fontSize="2rem"
                    marginLeft="2rem"
                    paddingTop="2rem"
                    paddingBottom="2rem"
                    lineHeight="2.2rem">
                    {card.title}
                  </Card.Title>
                </Card.Cover>
                <Card.Description
                  paddingTop="0.75rem"
                  color="#333"
                  fontFamily="Roboto, Arial, sans-serif"
                  fontSize="1rem"
                  lineHeight="1.2rem">
                  {card.description}
                </Card.Description>
                <Card.Action
                  href={card.action.href}
                  paddingBottom="1.5rem"
                  fontSize="0.875rem"
                  align="right"
                  fontFamily="Roboto Mono, Arial, sans-serif">
                  {card.action.name}
                </Card.Action>
              </Card>
            </React.Fragment>
          ))}
      </MjmlSection>
      {action && <Button action={action} />}
      <Footer />
    </Container>
  );
};
