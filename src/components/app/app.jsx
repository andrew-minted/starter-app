// CUSTOMIZE ME!

import React from 'react';

class Carousel extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }

  componentWillReceiveProps(nextProps) {
    this.props;
    console.log(nextProps);
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [
        'yo',
        'billy',
        'bob',
      ]
    };

    setTimeout(() => {
      let newSlides = this.state.slides.concat(['cheese']);
      this.setState({
        slides: newSlides
      });
    }, 1000);
  }

  _renderChildren() {
    return this.state.slides.map((text, index) => {
      return (
        <div key={index}>{text}</div>
      );
    });
  }

  render() {
    return (
      <Carousel>
        {this._renderChildren()}
      </Carousel>
    );
  }
}

export default App;
