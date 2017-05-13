const React = require('react');

const PlayerPreview = require('./PlayerPreview');

const UserProfile = ({
  avatar_url,
  blog,
  company,
  followers,
  following,
  location,
  login,
  name,
  public_repos
}) => (
  <PlayerPreview
  avatar={avatar_url}
  username={login} >
    <ul className="space-list-items">
      {name && <li>{name}</li>}
      {location && <li>{location}</li>}
      {company  && <li>{company}</li>}
      {followers && <li>Followers: {followers}</li>}
      {following && <li>Following: {following}</li>}
      {public_repos && <li>Public Repos: {public_repos}</li>}
      {blog && <li><a href={blog}>{blog}</a></li>}
    </ul>
  </PlayerPreview>
);

module.exports = UserProfile;
