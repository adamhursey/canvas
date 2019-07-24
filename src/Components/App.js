import React, { Component } from 'react';
import './App.css';
import Popup from './Popup';
import CanvasDraw from "react-canvas-draw";


class App extends Component {
  state = {
    color: '#000000',
    brushRadius: 1,
  }

  constructor(props) {
    super(props)

    this.colorChanger = this.colorChanger.bind(this);
    this.brushRadiusChanger = this.brushRadiusChanger.bind(this);
  }

  colorChanger(color) {
    this.setState({
      color
    })
  }

  brushRadiusChanger(e) {
    let number = parseInt(e.currentTarget.value)
    this.setState({
      brushRadius: number
    })
  }

  render() {
    return (
      <div className="App">
        <div className="canvas">
          <CanvasDraw
            canvasWidth="100%"
            canvasHeight="100%"
            brushColor={this.state.color}
            brushRadius={this.state.brushRadius}
            hideGrid={true}
            lazyRadius="0"
        />
          <Popup colorChanger={this.colorChanger} brushRadiusChanger={this.brushRadiusChanger} />
        </div>
      </div>
    );
  }
}


export default App;
