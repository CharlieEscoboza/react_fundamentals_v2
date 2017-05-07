const PropTypes = require('prop-types');
const React = require('react');
const { fetchUser } = require('../utils/api');

class PlayerInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(evt) {
    this.setState({
      username: evt.target.value
    });
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit(this.props.id, this.state.username);
  }

  render() {
    return (
      <form className="form-wrapper" onSubmit={this._handleSubmit}>
        <label className="header" htmlFor="username">
          {this.props.label}
        </label>
        <input
          className="form-input"
          type="text"
          value={this.state.username}
          placeholder="Github username"
          onChange={this._handleChange} />
        <button
          className="btn-submit"
          type="submit">
            Submit
        </button>
      </form>
    );
  }
}

PlayerInput.defaultProps = {
  label: 'User Form'
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
};

module.exports = PlayerInput;
