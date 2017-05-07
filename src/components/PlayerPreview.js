const PropTypes = require('prop-types');
const React = require('react');

const PlayerPreview = ({ avatar, id, onReset, username }) => {
  return (
    <div>
      <div className="column" >
        <img
          className="avatar"
          src={avatar}
          alt={`Avatar for ${username}`} />
        <h2 className="username" >@{username}</h2>
      </div>
      <button
        className="reset"
        onClick={onReset.bind(null, id)} >
        Reset
      </button>
    </div>
  );
};

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
};

module.exports = PlayerPreview;
