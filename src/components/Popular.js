const PropTypes = require('prop-types');
const React = require('react');

const { fetchPopularRepos } = require('../utils/api');

const Loading = require('./Loading');

/**
 * Select Language Component
 *
 * @param {Array<Object>} languages - Array of programming languages
 * @param {string} selectedLanguage - Selected programming language
 * @param {Function} onSelect - Handle the Select Language event
 * @returns {ReactElement} React Component
 * @private
 */
const SelectLanguage = ({ languages, selectedLanguage, onSelect }) =>  (
  <ul className="languages" >
    {languages.map((language, index) => (
      <li
        className={language === selectedLanguage ? 'active' : ''}
        key={index}
        onClick={onSelect.bind(null, language)}>
          {language}
      </li>
    ))}
  </ul>
);

SelectLanguage.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

const RepoGridItem = ({ html_url, index, name, owner, stargazers_count }) => {
  return (
    <li className="popular-item">
      <div className="popular-rank">#{index + 1}</div>
      <ul className="space-list-items">
        <li>
          <img className="avatar" src={owner.avatar_url} alt={owner.login} />
        </li>
        <li><a href={html_url}>{name}</a></li>
        <li>@{owner.login}</li>
        <li>{stargazers_count} stars</li>
      </ul>
    </li>
  );
};

const RepoGrid = ({ repos }) => {
  return (
    <ul className="popular-list">
      {repos.map((repo, index) => (
        <RepoGridItem key={index} index={index} {...repo} />
      ))}
    </ul>
  );
};

class Popular extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };
    this.updateLanguage = this.updateLanguage.bind(this);
    this._updateRepos = this._updateRepos.bind(this);
  }

  _updateRepos(repos) {
    this.setState({
      repos: repos
    });
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(language) {
    this.setState({
      selectedLanguage: language,
      repos: null
    });

    fetchPopularRepos(language)
      .then(this._updateRepos);
  }

  render() {
    const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
      <div>
        <SelectLanguage
          languages={languages}
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage} />
        {!this.state.repos ?
          <Loading /> :
          <RepoGrid repos={this.state.repos} />}
      </div>
    );
  }
}

module.exports = Popular;
