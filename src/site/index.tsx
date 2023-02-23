import React from 'react'
import Fixed from './fixed'
import Footer from './footer'
import Header from './header'
import Main from './main'

export default () =>
<html>
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="/output.css" rel="stylesheet" />
  </head>
  <body>
    <Header />
    <Main />
    <Footer />
    <Fixed />
  </body>
</html>