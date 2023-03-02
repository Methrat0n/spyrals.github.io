import React from 'react'
import config from '../../../utils/config'

export default () =>
  <>
    <a href={`tel:${config.telephone}`}><span className="font-bold">{config.footer.label_2}</span>{config.telephone}</a>
  </>