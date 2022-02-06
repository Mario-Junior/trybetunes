import React, { Component } from 'react';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';

class Profile extends Component {
  state = {
    loading: true,
    user: {},
  }

  async componentDidMount() {
    const user = await getUser();
    this.setState({ loading: false, user });
    console.log(user);
  }

  render() {
    return (
      <div data-testid="page-profile">
        <Header />
      </div>
    );
  }
}

export default Profile;
