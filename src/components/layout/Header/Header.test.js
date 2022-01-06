import React from "react";
import { shallow } from "enzyme";
import { HeaderComponent } from "./Header";

describe("Component Header", () => {
  const mockUser = {
    name: "Oskar",
    logged: true,
    position: "Admin",
  };
  it("should render without crashing", () => {
    const component = shallow(<HeaderComponent user={mockUser} />);
    expect(component).toBeTruthy();
  });
});
