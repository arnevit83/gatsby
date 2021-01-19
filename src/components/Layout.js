import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import GetSiteSettings from './SiteSettings'
import { withPrefix } from 'gatsby'

import "../assets/css/nucleo-svg.css";
import "../assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/scss/argon-design-system.scss?v1.0.0";


// reactstrap components
import { Container, Row, Button } from "reactstrap";


const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  const { twitter, location} = GetSiteSettings();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
        <meta name="robots" content="index,follow,all" />
        <meta name="revisit-after" content="10 days" />
        <meta name="designer" content="https://sparklingpeach.co.uk" />
        {/* schema.org for Google */}
        <meta itemprop="name" content={title}/>
        <meta itemprop="description" content={description} />
        <meta itemprop="image"   content={`${withPrefix('/')}img/og-image.jpg`} />
        {/* Twitter  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description"  content={description} />
        <meta name="twitter:site" content={twitter}  />
      </Helmet>
      <Navbar />
       <Button
          className="btn-icon-only back-to-top show"
          color="primary"
          name="button"
          type="button"
          onClick={() => {
            window.scrollTo(0, 0);
            document.body.scrollTop = 0;
          }}
        >
          <i className="ni ni-bold-up"></i>
        </Button> 
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
