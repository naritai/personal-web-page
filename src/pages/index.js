import * as React from "react";
import Layout from "../components/layout";
import GlobalStyle from "../styles/GlobalStyles";

const IndexPage = () => {
  return (
    <React.Fragment>
      <GlobalStyle />

      <Layout>
        <div>
          Layout children!!! (content)
        </div>
      </Layout>
    </React.Fragment>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage;
