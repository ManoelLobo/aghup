import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  StarredList,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

export default class User extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = { starred: [], loading: true, page: 1 };

  async componentDidMount() {
    this.setState({ loading: true });

    const response = await this.loadRepos();

    this.setState({ starred: response.data, loading: false });
  }

  loadMore = async () => {
    const { starred, page } = this.state;

    const response = await this.loadRepos(page + 1);

    this.setState({ starred: [...starred, ...response.data], page: page + 1 });
  };

  loadRepos(page = 1) {
    const { navigation } = this.props;
    const user = navigation.getParam('user');

    return api.get(`/users/${user.login}/starred`, {
      params: { page },
    });
  }

  render() {
    const { starred, loading } = this.state;
    const { navigation } = this.props;
    const user = navigation.getParam('user');

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>

        {loading ? (
          <ActivityIndicator color="#627d98" />
        ) : (
          <StarredList
            data={starred}
            keyExtractor={star => star.id.toString()}
            onEndReachedThreshold={0.3}
            onEndReached={this.loadMore}
            renderItem={({ item }) => (
              <Starred
                onPress={() => {
                  navigation.navigate('Repository', { repository: item });
                }}
              >
                <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.owner.login}</Author>
                </Info>
              </Starred>
            )}
          />
        )}
      </Container>
    );
  }
}
