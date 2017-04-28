const React = require('react');
import Popular from './Popular';

require('../index.css');

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Popular />
      </div>
    );
  }
}
