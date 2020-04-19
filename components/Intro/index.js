import { bool, func } from 'prop-types';
import React, { PureComponent } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';
import { Header, Paragraph } from '../shared/text';
import { Button } from '../shared/Button';

export class Intro extends PureComponent {
  static propTypes = {
    isActive: bool.isRequired,
    onSelect: func.isRequired,
    onStart: func.isRequired
  };

  render() {
    const { isActive, onSelect, onStart, time } = this.props;

    const morningText = {
      header: "Rise and shine!",
      textItems: ["An exciting day awaits.", "Are you ready to pick out your goals for today?"]
    };

    const dayText = {
      header: "Hello sunshine!",
      textItems: ["Here is a reminder of the goals you set for today. Set all sail!"]
    };

    const eveningText = {
      header: "Here's to a great day!",
      textItems: ["You gave it your best.", "Call it a day and take a look at what you achieved:"]
    };

    var displayItem;
    if (5 < time && time < 12) {
      displayItem = morningText;
    }
    else if (12 < time && time < 19) {
      displayItem = dayText;
    }
    else {
      displayItem = eveningText;
    }

  var paragraphs = displayItem.textItems.map(
    function(message){ 
      return <Paragraph>{message}</Paragraph> 
    });

    const content = (
      <Container>
        <Header>{displayItem.header}</Header>
        {paragraphs}
        <ButtonContainer>
          {isActive ? (
            <Button label="START" onPress={onStart} />
          ) : (
            <Button label="START" disabled />
          )}
        </ButtonContainer>
      </Container>
    );

    return isActive ? (
      content
    ) : (
      <TouchableWithoutFeedback onPress={onSelect}>
        {content}
      </TouchableWithoutFeedback>
    );
  }
}

const Container = styled.View`
  padding: 0 20px 0 20px;
`;

const ButtonContainer = styled.View`
  margin: 0 0 0 auto;
`;
