import React from 'react'

type Props = {
  className: string
  href: string
  label: string
}

export default ({className, href, label}: Props) =>
<a className={`${className} bg-white text-black border-2 border-yellow-400 w-fit rounded-xl py-2 px-8`} href={href}>
  <button>
      {label}
  </button>
</a>
