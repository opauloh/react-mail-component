import React from 'react';

import { MjmlSection, MjmlColumn, MjmlText, MjmlButton } from 'mjml-react';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Header from '../components/Header';
import Container from '../components/Container';
import Card from '../components/Card';

const pallete = {
  primary: '#3f51b5',
  text: '#ffffff'
};

export const generate = ({ title, description, cards, action }) => {
  return (
    <Container title={title}>
      <Header backgroundColor={pallete.primary}>
        <Header.Title fontWeight="400" align="center">
          {title}
        </Header.Title>
      </Header>
      <MjmlSection backgroundColor="#ffffff" margin="0">
        <MjmlColumn padding="0" margin="0">
          {description &&
            description.map((desc, idx) => (
              <MjmlText
                key={idx}
                padding="1rem"
                fontFamily="Roboto, Arial, sans-serif"
                fontSize="18px"
                lineHeight="22px">
                {desc}
              </MjmlText>
            ))}
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection textAlign="left" paddingBottom="10px" paddingTop="0px" backgroundColor="#ffffff">
        {cards &&
          cards.map((card, index) => (
            <React.Fragment key={index}>
              <Card width="48%" backgroundColor="#E1E2E1" cssClass="card">
                <Card.Cover backgroundColor={pallete.primary} padding={0}>
                  <Card.Title
                    color={pallete.text}
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
                  fontFamily="Roboto Mono, Arial, sans-serif"
                  color={pallete.primary}>
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
                      border="1px solid transparent"
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
      <Footer backgroundColor={pallete.primary}>
        <Footer.Text>Footer</Footer.Text>
      </Footer>
    </Container>
  );
};
