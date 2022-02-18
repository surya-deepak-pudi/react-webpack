import React from "react"
import "./App.css"
import reactIcon from "../public/assets/reactIcon.png"

const App = () => {
  return (
    <div>
      <h1 className="hello">Hello React</h1>
      <img src={reactIcon} alt="React Icon" />
    </div>
  )
}

export default App
