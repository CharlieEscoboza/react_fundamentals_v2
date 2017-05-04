const React = require('react');

class Loading extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.counter = null;
    this.updateText = this.updateText.bind(this);
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

  componentWillUnmount() {
    clearInterval(this.counter);
  }

  render() {
    return (
      <div>
        {`${this.props.message}${this.state.text}`}
      </div>
    );
  }
}

Loading.defaultProps = {
  message: 'Loading',
  speed: 300
};

export default Loading;
