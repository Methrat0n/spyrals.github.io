import * as fs from "fs";
import prettier from "prettier";
import ReactDOMServer from "react-dom/server";
import React from "react";
import Site from '.'
import Contact from './pages/nous-contacter'
import Home from './pages/home'

const pages = [
  [<Site Main={Home} />,"./index.html"],
  [<Site Main={Contact} />, "./nous-contacter.html"]
] as const

const render = ([element, outputFile]: readonly [JSX.Element, string]) => {
  const html = ReactDOMServer.renderToStaticMarkup(element);
  const htmlWDoc = "<!DOCTYPE html>" + html;
  const prettyHtml = prettier.format(htmlWDoc, { parser: "html" });

  fs.writeFileSync(outputFile, prettyHtml);
  console.log(`Wrote ${outputFile}`);
}

pages.forEach(render)
