import React from 'react'
import ReactDOM from "react-dom"
import Home from "./pages/Home"
import "../../scss/custom.scss"

function App() {
  return (
    <div>
      <Home />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));