import React from 'react'
import config from './utils/config'
import Footer from './ui/organism/footer'
import Header from './ui/organism/header'

type Props = {
  Main: React.FC
}

export default ({ Main }: Props) =>
<html>
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={config.home_description} />
    <title>{config.home_title}</title>
    <link rel="icon" href="/spyrals.svg" type="image/svg+xml" />
    <link href="/output.css" rel="stylesheet" />
  </head>
  <body className="bg-purple-void">
    <Header />
    <Main />
    <Footer />
  </body>
</html>