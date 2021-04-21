import React from "react"
import Navigation from "../components/navigation"
import '../styles/index.scss'

const Layout = (props)=> {
  return (
    <div>
      <Navigation/>
                  
      <h2>3sixty</h2>
      {props.children}

    </div>
  )
}

export default Layout