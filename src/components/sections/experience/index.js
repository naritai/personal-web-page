import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { CompanyLink } from './company-link';
import { Period } from './period';

const StyledExperienceSection = styled.section`
  margin-bottom: 50px;

  .work-experience__line {
    margin-bottom: 20px;
    margin-top: -15px;
  }
`;

const StyledCompanyDetails = styled.section`
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin-bottom: 30px;

  .company-details__header {
    width: 100%;
  }

  .company-details__content {
    padding: 5px;
    line-height: 1.5em;
  }

  .company-details__description p {
    margin-left: 240px;
  }

  .company-details__stack {
    color: #e5c687;
    margin-left: 240px;
  }

  .company-details__stack-foreword {
    font-weight: bold;
    color: var(--main-text);
  }

  @media only screen and (max-width: 768px) {
    .company-details__header {
      display: flex;
      align-items: center;
    }

    .company-details {
      flex-direction: column;
    }

    .company-details__content {
      line-height: 1.5em;
    }

    .company-details__period {
      padding: 2px;
      margin-top: 0;
      width: 55px;
      min-height: 50px;
      font-size: 1.5em;
      border: 1px solid #ffffff;
    }

    .company-details__period::before {
      display: none;
    }

    .company-details__period-delimeter {
      display: none;
    }

    .company-details__description p {
      width: 100%;
      margin-left: 0;
    }

    .company-details__stack {
      width: 100%;
      margin-left: 0;
    }
  }
`;

function Experience() {
  const { allMarkdownRemark: jobs } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        filter: { fileAbsolutePath: { regex: "/content/experience/" } }
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
              url
            }
          }
        }
      }
    }
  `);

  const jobsData = jobs.edges;

  return (
    <StyledExperienceSection id="experience">
      <h2 className="heading">Where I&#39;ve worked</h2>
      <hr className="horizontal-line work-experience__line" />

      {jobsData &&
        jobsData.map(({ node }) => {
          const { frontmatter, html, id } = node;
          const { url, stack, period, title } = frontmatter;

          return (
            <StyledCompanyDetails key={id}>
              <div className="company-details__header">
                <Period period={period} />
                <CompanyLink text={title} url={url} disabled={url === ''} />
              </div>

              <div className="company-details__content">
                <div
                  className="company-details__description"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
                <p className="company-details__stack">
                  <b className="company-details__stack-foreword">Stack: </b>
                  {stack && stack.join(' • ')}
                </p>
              </div>
            </StyledCompanyDetails>
          );
        })}
    </StyledExperienceSection>
  );
}

export { Experience };
