import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Header = styled.View`
  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #f0f2f6;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #f0f2f6;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #102b44;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`;

export const Bio = styled.Text`
  font-size: 14px;
  line-height: 18px;
  color: #627d98;
  margin-top: 5px;
  text-align: center;
`;

export const StarredList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Starred = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  background: #f0f2f6;
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 20px;
`;

export const OwnerAvatar = styled.Image`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background: #627d98;
`;

export const Info = styled.View`
  flex: 1;
  margin-left: 10px;
`;

export const Title = styled.Text.attrs({ numberOfLines: 1 })`
  font-size: 15px;
  font-weight: bold;
  color: #102b44;
`;

export const Author = styled.Text`
  margin-top: 2px;
  font-size: 13px;
  color: #627d98;
`;
