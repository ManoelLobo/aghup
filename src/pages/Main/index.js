import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Form, Input, SubmitButton } from './styles';

export default function Main() {
  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Add user"
        />

        <SubmitButton>
          <Icon name="add" size={20} color="#f0f2f6" />
        </SubmitButton>
      </Form>
    </Container>
  );
}

Main.navigationOptions = {
  title: 'Users',
};
