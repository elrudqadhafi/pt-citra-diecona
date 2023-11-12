import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import "remixicon/fonts/remixicon.css"
import App from "./app"
import { BrowserRouter } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop"

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </>
)
