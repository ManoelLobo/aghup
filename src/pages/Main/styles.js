import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #9eb3c7;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#627d98',
})`
  flex: 1;
  height: 40px;
  background: #f0f2f6;
  border: 1px solid #f0f2f6;
  border-radius: 4px;
  padding: 0 15px;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-content: center;

  background: #3ebd93;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
`;
