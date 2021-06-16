import React from "react";
import { shallow, configure, render } from "enzyme";
import Counter from "./Counter";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

function sum(a, b) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});