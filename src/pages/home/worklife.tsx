import React from 'react'

export default () =>
  <section className="flex flex-col items-center pt-24 ml-32" id='worklife'>
    <h1 className="text-6xl self-start ml-16">VIE D'ENTREPRISE</h1>
    <p className="my-12 mx-96">Lorem ipsum dolor sit amet consectetur. Felis amet faucibus orci sit urna eleifend. Iaculis pellentesque facilisis nascetur lorem leo volutpat eget. Aliquet vel ullamcorper pretium sed pretium facilisis eget duis vitae. Vulputate mattis sed nunc fringilla est dictum nullam rhoncus a. Ut eget dolor aliquet est at. Odio morbi tincidunt lectus vitae tempor sit nisi platea. </p>
    <WorklifeArrows />
    <Gallery />
  </section>

const arrowsStyle = "bg-white w-[93px] h-[22px] object-fill"

const WorklifeArrows = () =>
  <div className="self-end mr-40">
    <img className={`mr-16 ${arrowsStyle}`} src="/svgs/arrow.svg"/>
    <img className={`ml-16 transform -scale-x-100 ${arrowsStyle}`} src="/svgs/arrow.svg"/>
  </div>

const imagesStyle = "rounded-3xl border-4 object-cover"

const Gallery = () =>
  <div className="flex flex-row overflow-auto py-20 pl-4">
    <img className={`mt-12 border-purple-spyrals -rotate-[4deg] -z-20 h-[20rem] w-[23rem] ${imagesStyle}`} src="/images/worklife.webp"/>
    <img className={`mt-12 border-yellow rotate-[9deg] -translate-y-12 -z-10 h-[20rem] w-[19rem] ${imagesStyle}`} src="/images/worklife.webp"/>
    <img className={`mt-12 border-purple-dark -rotate-1 translate-y-12 -z-10 h-[20rem] w-[26rem] ${imagesStyle}`} src="/images/worklife.webp"/>
    <img className={`mt-12 border-yellow rotate-[20deg] -z-20 h-[21rem] w-[21rem] ${imagesStyle}`} src="/images/worklife.webp"/>
  </div>
