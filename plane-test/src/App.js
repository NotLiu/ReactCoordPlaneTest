import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.canvasWidth = 900;
    this.canvasHeight = 900;
    this.gridHeight = this.canvasHeight / 20;
    this.gridWidth = this.canvasWidth / 20;
  }

  render() {
    return (
      <div id="coordPlane">
        <svg width={this.canvasWidth} height={this.canvasHeight}>
          <g>
            <line
              x1={0}
              y1={0}
              x2={this.canvasWidth}
              y2={this.canvasHeight}
              stroke={"black"}
            />
          </g>
        </svg>
      </div>
    );
  }
}

export default App;
