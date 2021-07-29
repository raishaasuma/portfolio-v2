import * as React from "react";
import { siteMetadata } from "../../gatsby-config";
import Header from '../Components/Header';
import Banner from '../Components/Banner'

// LINK syntax for @routes:  <Link to="/about"> About </Link>

// markup
const IndexPage = () => {
  return (
    <div style={{margin:"20px"}}>
      <Header menuLinks={siteMetadata.menuLinks}/>
      <Banner />
    </div>
  )
}

export default IndexPage
