// import { run } from "./app/app"
// import "./main.scss"
// import { AlertService } from "./app/alert.service"
// import { ComponentService } from "./app/component.service"
// console.log("abc")
// const alertService = new AlertService()
// const componentService = new ComponentService()
// run(alertService, componentService)
import React from "react"
import ReactDOM from "react-dom"
import App from "./App.js"

ReactDOM.render(
  // React.createElement("h1", {}, "Hello World"),
  <App></App>,
  document.getElementById("root"),
  (data, ...params) => {
    console.log({ ...params, data })
  }
)``
