const PropTypes = require('prop-types');
const React = require('react');

const PlayerPreview = ({ avatar, children, label = '', username }) => {
  return (
    <div>
      <div className="column" >
        {label && <h3>{label}</h3>}
        <img
          className="avatar"
          src={avatar}
          alt={`Avatar for ${username}`} />
        <h2 className="username" >@{username}</h2>
      </div>
      {children}
    </div>
  );
};

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};

module.exports = PlayerPreview;
