import * as React from "react";

const test = [1, 2, 3];

export interface HelloProps {
  compiler: string;
  framework: string;
}

const Hello = ({ compiler, framework }: HelloProps) => (
  <h1>
    Hello from {compiler} and {framework}!
  </h1>
);

export default Hello;
