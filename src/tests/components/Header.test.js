import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
// import reactShallowRenderer from "react-test-renderer/shallow";
import Header from "../../components/Header";

test("should render Header correctly", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();

  //   expect(wrapper.find("h1").text()).toBe("Expensify");
  //   const renderer = new reactShallowRenderer();
  //   renderer.render(<Header />);
  //   expect(renderer.getRenderOutput()).toMatchSnapshot();
});
