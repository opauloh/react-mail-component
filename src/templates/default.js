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
              <Card
                title={card.title}
                description={card.description}
                action={card.action}
                type={card.type}
              />
              {index % 2 === 0 && <MjmlColumn width="4%"> </MjmlColumn>}
            </React.Fragment>
          ))}
      </MjmlSection>
      {action && <Button action={action} />}
      <Footer />
    </Container>
  );
};
