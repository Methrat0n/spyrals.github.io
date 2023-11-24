import React from 'react'
import Footer from './ui/organism/footer'
import Header from './ui/organism/header'


export type Preload = {as: string, href: string}

type Props = {
  Main: React.FC
  description: string
  title: string
  preloads?: ReadonlyArray<Preload>
}

export default ({ Main, description, title, preloads = [] }: Props) => { 

return (
  <html className='hide'>
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <title>{title}</title>
      <link rel="icon" href="/spyrals.svg" type="image/svg+xml" />
      <link href="/output.css" rel="stylesheet" />
      {
        preloads.map((preload) => <link rel="preload" {...preload} fetchpriority="high" />)
      }
      <script defer src="./assets/js/team.js"></script>
      <script defer src="./assets/js/video.js"></script>
    </head>
    <body className="bg-purple-void">
      <Header />
      <Main />
      <Footer />
    </body>
  </html>
)}




