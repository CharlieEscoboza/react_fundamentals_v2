const React = require('react');

class Loading extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.counter = null;
  }

  updateText() {
    let newState = {};

    if (this.state.text === '...') {
      newState = {text: ''}
    } else {
      newState = {text: `${this.state.text}.`}
    }

    this.setState(newState)
  }

  componentDidMount() {
    this.counter = setInterval(this.updateText,
      this.props.speed);
  }

  componentWillUnMount() {
    clearInterval(this.counter);
  }

  render() {
    <div>
      {`${this.props.message}${this.state.text}`}
    </div>
  }
}

Loading.defaultProps = {
  message: 'Loading',
  speed: 300
};

module.exports = Loading;
