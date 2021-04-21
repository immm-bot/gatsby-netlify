import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import './navigation.module.scss'

const Navigation = ()=> {
  const data = useStaticQuery(graphql` 
  query{
    site{
      siteMetadata{
      title
      telephone
      }
    }
  }
  `)
  return (
    <header>
      {data.site.siteMetadata.title}
        <nav>
            <ul>
                <li> <Link to="/projects">Projects</Link></li>
                <li> <Link to="/about-us">About us</Link></li>
            </ul>         
        </nav>
       Telphone : {data.site.siteMetadata.telephone}
    </header>
  )
}

export default Navigation