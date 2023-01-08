import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

const Experience = () => {
  const { allMarkdownRemark: jobs } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: {frontmatter: {date: DESC}}
        filter: {fileAbsolutePath: {regex: "/content/experience/"}}
      ) {
        edges {
          node {
            html
            id
            frontmatter {
              date
              period
              stack
              title
            }
          }
        }
      }
    }
  `);

  

  const jobsData = jobs.edges;

  console.log('jobsData', jobsData);


  return (
    <div>
      {jobsData && jobsData.map(() => {

      })}
      Hello!
    </div>
  )
}

export { Experience };