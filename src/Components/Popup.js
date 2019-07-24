import React, { Component } from 'react';
import './Popup.css'
import { CirclePicker} from 'react-color';

class Popup extends Component {
  handleChange(color, event) {

  }

  render() {
    var colorChanger = this.props.colorChanger;
    var brushRadiusChanger = this.props.brushRadiusChanger;
    return (
      <div className="popup">
        <CirclePicker onChange={(e) => colorChanger(e.hex)}/>
        <div className="quantity">
          <input type="number" id="brushRadius" name="tentacles" min="1" max="1000" step="1" onChange={(e) => brushRadiusChanger(e)} />
        </div>
      </div>
    );
  }
}


export default Popup;
