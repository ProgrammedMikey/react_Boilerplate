import React from 'react';
import AltContainer from 'alt-container';
import UserStore from '../stores/UserStore'; 
import Navigation from './Navbar';


export default class App extends React.Component {
  render() {
    return (
      <AltContainer stores={{
        UserStore: UserStore
        
      }}>
        <Navigation />
        {this.props.children}
      </AltContainer>
    );
  }
}

App.propTypes = { children: React.PropTypes.object };