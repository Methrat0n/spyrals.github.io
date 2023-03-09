import React from 'react'

const labelClassNames = '-rotate-2 font-semibold text-lg'
const inputClassNames = 'bg-transparent border-b-[1px] focus-visible:outline-none -rotate-2 mb-3 md:mb-7'

type InputProps= {
  name: string
  type: string
  label: string
  required?: boolean
}
export const Input = ({name, type, label, required}: InputProps) => 
  <>
    <label htmlFor={name} className={labelClassNames}>{label}</label>
    <input id={name} name={name} type={type} required={required} className={inputClassNames} />
  </>

type AreaProps= {
  name: string
  label: string
}
export const Area = ({name, label}: AreaProps) =>
  <>
    <label htmlFor={name} className={labelClassNames}>{label}</label>
    <textarea id={name} name={name} rows={5} cols={33} className={`${inputClassNames} pt-4`} />
  </>