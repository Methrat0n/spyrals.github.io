import React from 'react'

type Props = {
  href: string
  label: string
}

export default ({href, label}: Props) =>
<a href={href}>
  <button className="bg-white text-black border-2 border-yellow-400 w-fit rounded-xl py-2 px-8">
      {label}
  </button>
</a>
