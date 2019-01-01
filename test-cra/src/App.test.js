import React from "react";
import App from "./App";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-15";
Enzyme.configure({ adapter: new Adapter() });

describe("Increment", () => {
  it("Increment", () => {
    const spy = jest.spyOn(App.prototype, "incrementAge");
    const app = shallow(<App />);
    const button = app.find(".btn-primary");
    button.simulate("click");
    expect(spy).toHaveBeenCalled();
  });
});

describe("Decrement", () => {
  it("Decrement", () => {
    const spy = jest.spyOn(App.prototype, "decrementAge");
    const app = shallow(<App />);
    const button = app.find(".btn-success");
    button.simulate("click");
    expect(spy).toHaveBeenCalled();
  });
});