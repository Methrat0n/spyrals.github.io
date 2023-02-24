import React from 'react'

export default () =>
  <section className="flex flex-col items-center pt-24 ml-32" id='worklife'>
    <h1 className="text-6xl self-start">VIE D'ENTREPRISE</h1>
    <p className="my-12">Lorem ipsum dolor sit amet consectetur. Felis amet faucibus orci sit urna eleifend. Iaculis pellentesque facilisis nascetur lorem leo volutpat eget. Aliquet vel ullamcorper pretium sed pretium facilisis eget duis vitae. Vulputate mattis sed nunc fringilla est dictum nullam rhoncus a. Ut eget dolor aliquet est at. Odio morbi tincidunt lectus vitae tempor sit nisi platea. </p>
    <WorklifeArrows />
    <Gallery />
  </section>

const arrowsStyle = "bg-white w-[234px] h-[22px] object-fill"

const WorklifeArrows = () =>
  <div className="self-end">
    <img className={`mr-40 ${arrowsStyle}`} src="/svgs/arrow.svg"/>
    <img className={`ml-40 transform -scale-x-100 ${arrowsStyle}`} src="/svgs/arrow.svg"/>
  </div>

const imagesStyle = "rounded-3xl border-4 object-cover"

const Gallery = () =>
  <div className="flex flex-row">
    <img className={`mt-12 border-purple-spyrals -rotate-6 -z-10 h-[35rem] w-[35rem] ${imagesStyle}`} src="/images/worklife.webp"/>
    <img className={`border-purple-dark rotate-[16deg] -z-20 h-[45rem] w-[28rem] ${imagesStyle}`} src="/images/worklife.webp"/>
  </div>
