import * as React from "react";
import Hello from "../Hello/Hello";

export default class App extends React.Component {
  state = {
    name: "App"
  };

  render() {
    const { name } = this.state;

    return (
      <div>
        <h1>{name}</h1>
        <Hello compiler="TS" framework="React" />
      </div>
    );
  }
}
