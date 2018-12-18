import React from 'react';
import { Helmet } from 'react-helmet';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet defaultTitle="BBM - Home" />
        <h1>Home</h1>
      </React.Fragment>
    );
  }
}

export default Home;
