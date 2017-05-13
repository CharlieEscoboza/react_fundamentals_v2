const React = require('react');
const QueryString = require('query-string');

const { battle } = require('../utils/api');
const Loading = require('./Loading');
const UserProfile = require('./UserProfile');

class Results extends React.Component {

  constructor(props) {
    super(props);
    this._updatePlayers = this._updatePlayers.bind(this);
    this.state = {
      winner: null,
      loser: null
    };
  }

  _updatePlayers(results) {
    this.setState({
      winner : results[0],
      loser: results[1]
    });
  }

  componentDidMount() {
    const players = QueryString.parse(this.props.location.search);

    battle([
      players.playerOneName,
      players.playerTwoName
    ]).then(this._updatePlayers);
  }

  render() {
    const { loser, winner } = this.state;

    return (
      <div className="row">
        {winner && (
          <div className="column">
            <h3>Winner</h3>
            <UserProfile {...winner.profile} />
          </div>
        )}
        {loser && (
          <div className="column">
            <h3>Loser</h3>
            <UserProfile {...loser.profile} />
          </div>
        )}
        { !loser && !winner && <Loading />}
      </div>
    );
  }
}

module.exports = Results;
