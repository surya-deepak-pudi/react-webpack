import React from "react"
import App from "./App.js"

import { shallow } from "enzyme"

describe("testing app", () => {
  it("testing hello", () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(".hello").text()).toContain("Hello React")
  })
})
