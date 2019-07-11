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

export const UserList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #f0f2f6;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #102b44;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const Bio = styled.Text.attrs({ numberOfLines: 2 })`
  font-size: 13px;
  line-height: 18px;
  color: #627d98;
  margin-top: 5px;
  text-align: center;
`;

export const ProfileButton = styled(RectButton)`
  align-self: stretch;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  height: 36px;
  border-radius: 4px;
  background: #3ebd93;
  opacity: ${props => (props.loading ? 0.6 : 1)};
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #f0f2f6;
  text-transform: uppercase;
`;
