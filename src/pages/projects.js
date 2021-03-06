import React from "react"
import {  graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"

const Projects = ()=> {
  const data = useStaticQuery(graphql` 
  query{
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
          html
          excerpt
        }
      }
    }    
  }`)

  console.log(data)
  return (
   <Layout>
      <h1>Projects</h1>
     <ul>
       {data.allMarkdownRemark.edges.map((edge) => {
        return(
          <li>
            <h2>{edge.node.frontmatter.title}</h2>
            <p>{edge.node.frontmatter.date}</p>
          </li>
        ) 
      })}

     </ul>
    
   </Layout>
     
  )
}

export default Projects