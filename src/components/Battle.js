const React = require('react');
const { Link } = require('react-router-dom');
const PlayerInput = require('./PlayerInput');
const PlayerPreview = require('./PlayerPreview');

class Battle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playerOneName: '',
      playerOneImage: null,
      playerTwoName: '',
      playerTwoImage: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetPlayer = this.resetPlayer.bind(this);
  }

  handleSubmit(id, username) {
    this.setState({
      [`${id}Name`]: username,
      [`${id}Image`]: `https://github.com/${username}.png?size=200`
    });
  }

  resetPlayer(id) {
    this.setState({
      [`${id}Name`]: '',
      [`${id}Image`]: null
    });
  }

  render() {
    return (
      <div>
        <div className="container form-container">
          {!this.state.playerOneName ?
            <PlayerInput
              id="playerOne"
              label="Player One"
              onSubmit={this.handleSubmit} /> :
              <PlayerPreview
                avatar={this.state.playerOneImage}
                username={this.state.playerOneName}>
                <button
                  className="reset"
                  onClick={this.resetPlayer.bind(null, "playerOne")} >
                  Reset
                </button>
              </PlayerPreview>}

          {!this.state.playerTwoName ?
            <PlayerInput
              id="playerTwo"
              label="Player Two"
              onSubmit={this.handleSubmit} /> :
              <PlayerPreview
                avatar={this.state.playerTwoImage}
                username={this.state.playerTwoName}>
                <button
                  className="reset"
                  onClick={this.resetPlayer.bind(null, "playerTwo")} >
                  Reset
                </button>
              </PlayerPreview>}
        </div>
        {this.state.playerOneName &&
          this.state.playerTwoName &&
        <Link
          className="button"
          to={{
            pathname: `${this.props.match.url}/results`,
            search: `?playerOneName=${this.state.playerOneName}&playerTwoName=${this.state.playerTwoName}`
          }}>Battle</Link>}
      </div>
    );
  }
}

module.exports = Battle;
