import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/Restaurant';
import Restaurant from './components/Restaurant';


class Map extends React.Component {
  render() {
    return (
      <div>
        your location will be here
      </div>
    );
  }
}

class Result extends React.Component {
  render() {
    return (
      <div>
        your option will be {Math.floor(Math.random() * 10)}
      </div>
    );
  }
}

class Button extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { random: 0 };
  }

  handleClick() {
    const min = 0;
    const max = 10;
    const rand = Math.floor(min + Math.random() * (max - min));
    this.setState({ random: rand });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Click</button>
        <div>The number is: {this.state.random}</div>
      </div>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <div className="finder">
        <div className="map">
          <Restaurant />
        </div>
        <div className="button">
          <Button />
        </div>
        <div className="result">
          <Result />
        </div>
      </div>
    );
  }
}



// ========================================

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
