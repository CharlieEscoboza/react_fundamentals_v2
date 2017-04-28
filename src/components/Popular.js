const PropTypes = require('prop-types');
const React = require('react');

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

class Popular extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(language) {
    this.setState({
      selectedLanguage: language
    });
  }

  render() {
    const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
      <div>
        <SelectLanguage
          languages={languages}
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage} />
      </div>
    );
  }
}

export default Popular;
