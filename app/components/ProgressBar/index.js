import React, { Component, Fragment } from 'react';
import "./style.scss"

class ProgressBar extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
  
        const parent = this.props;
  
        let values = parent.readings && parent.readings.length && parent.readings.map(function(item, i) {
            if(item.value > 0) {
                return (
                    <div className="value" style={{'color': item.color, 'width': item.value + '%'}}  key={i}>
                        <span>{item.value}%</span>
                    </div>
                )
            }
        }, this);
  
        let calibrations = parent.readings && parent.readings.length && parent.readings.map(function(item, i) {
            if(item.value > 0) {
                return (
                    <div className="graduation" style={{'color': item.color, 'width': item.value + '%'}}  key={i}>
                        <span>|</span>
                    </div>
                )
            }
        }, this);
  
        let bars = parent.readings && parent.readings.length && parent.readings.map(function(item, i) {
            if(item.value > 0) {
                return (
                    <div className="bar" style={{'backgroundColor': item.color, 'width': item.value + '%'}}  key={i}>
  
                    </div>
                )
            }
        }, this);
  
        let legends = parent.readings && parent.readings.length && parent.readings.map(function(item, i) {
              if(item.value > 0) {
                return (
                    <div className="legend" key={i}>

                    </div>
             )
         }
      }, this);
  
      return (
        <div className="multicolor-bar">
            <div className="values">
                {values == ''?'':values}
            </div>
            <div className="scale">
                {calibrations == ''?'':calibrations}
            </div>
            <div className="bars">
                {bars == ''?'':bars}
            </div>
            <div className="legends">
                {legends == ''?'':legends}
            </div>
        </div>
      );
    }
  }
  
  export default ProgressBar;