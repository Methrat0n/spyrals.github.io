import React from 'react'

const phone = '06 01 20 30 04'

export default () =>
  <>
    <a href={`tel:${phone}`}><span className="font-bold">Nous téléphoner : </span>{phone}</a>
  </>