import * as fs from "fs";
import prettier from "prettier";
import ReactDOMServer from "react-dom/server";
import React from "react";
import Site from './site'

render();

function render() {
  let html = ReactDOMServer.renderToStaticMarkup(<Site />);
  let htmlWDoc = "<!DOCTYPE html>" + html;
  let prettyHtml = prettier.format(htmlWDoc, { parser: "html" });
  let outputFile = "./index.html";
  // todo tailwind
  fs.writeFileSync(outputFile, prettyHtml);
  console.log(`Wrote ${outputFile}`);
}