import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import VegSandwich from './containers/VegSandwich/VegSandwich';

class App extends Component {
  render() {
    return (
      <div >
        <Layout>
          <VegSandwich/>
        </Layout>
      </div>
    );
  }
}

export default App;
