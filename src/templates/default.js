import React from 'react';

import { MjmlSection, MjmlColumn, MjmlText } from 'mjml-react';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Header from '../components/Header';
import Container from '../components/Container';
import Card from '../components/Card';

const pallete = {
  primary: '#20639B',
  text: '#ffffff'
};
export const generate = ({ title, description, cards, action }) => {
  return (
    <Container title={title}>
      <Header>
        <Header.Title>{title}</Header.Title>
      </Header>
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
              <Card
                type={card.type}
                width="48%"
                backgroundColor="#e5e5e5"
                borderRadius="8px"
                cssClass="card">
                <Card.Title
                  paddingTop="2rem"
                  color="#000000"
                  fontWeight="900"
                  fontFamily="Roboto, Arial, sans-serif"
                  fontSize="3rem"
                  lineHeight="3.2rem">
                  {card.title}
                </Card.Title>
                <Card.Description
                  paddingTop="0.75rem"
                  color="#000000"
                  fontFamily="Roboto, Arial, sans-serif"
                  fontSize="1rem"
                  lineHeight="1.2rem">
                  {card.description}
                </Card.Description>
                <Card.Action
                  href={card.action.href}
                  paddingBottom="1.5rem"
                  fontSize="0.875rem"
                  fontFamily="Roboto Mono, Arial, sans-serif">
                  {card.action.name}
                </Card.Action>
              </Card>
              {index % 2 === 0 && <MjmlColumn width="4%"> </MjmlColumn>}
            </React.Fragment>
          ))}
      </MjmlSection>
      {action && (
        <MjmlSection>
          <MjmlColumn width="100%">
            {action.map((btn, idx) => {
              switch (btn.color) {
                case 'secondary':
                  return (
                    <Button
                      border={`1px solid ${pallete.primary}`}
                      backgroundColor={pallete.text}
                      color={pallete.primary}
                      key={idx}
                      href={btn.href}>
                      {btn.name}
                    </Button>
                  );
                default:
                  return (
                    <Button
                      color={pallete.text}
                      borderRadius="4px"
                      backgroundColor={pallete.primary}
                      key={idx}
                      href={btn.href}>
                      {btn.name}
                    </Button>
                  );
              }
            })}
          </MjmlColumn>
        </MjmlSection>
      )}
      <Footer>
        <Footer.Text>Footer</Footer.Text>
      </Footer>
    </Container>
  );
};
