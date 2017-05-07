const React = require('react');
const QueryString = require('query-string');


class Results extends React.Component {
  render() {
    const players = QueryString.parse(this.props.location.search);

    return (
      <pre>{JSON.stringify(players, null, 2)}</pre>
    );
  }
}

module.exports = Results;
