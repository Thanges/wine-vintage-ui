import React, { Component } from 'react';
import TableStatistics from './components/TableStatistics'
import ChartStatistics from './components/ChartStatistics'



class App extends Component {
  render() {
    return (
    	<div>
      <TableStatistics  />
      <ChartStatistics />
      </div>
    );
  }
}

export default App;
