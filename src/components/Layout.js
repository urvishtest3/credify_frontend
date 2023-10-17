import React from 'react'
import { Helmet } from 'react-helmet';
import './Layout.css'
const Layout = ({ children, title, description, keywords }) => {
    return (
        <div className="layout--div">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
        </Helmet>
        {children}
      </div>
    )
};

Layout.defaultProps = {
    title: 'Credify ',
    description: 'Credit card validator',
    keywords: 'Credify - Credit card validator',
  };

export default Layout