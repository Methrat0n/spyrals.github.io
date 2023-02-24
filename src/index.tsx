import React from 'react'
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
    <link href="/output.css" rel="stylesheet" />
  </head>
  <body className="bg-purple-void">
    <Header />
    <Main />
    <Footer />
  </body>
</html>