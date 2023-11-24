import React from 'react'
import SpyralsLogo from './spyrals-logo'
import NavigationAndSocial from './navigation-and-social'
import ConsoMax from './conso'
import config from '../../../utils/config'
import fs from 'fs'

const getfilesize = (paths: ReadonlyArray<string>):string => {
  let total = 0
  paths.forEach((path) => {
    total += fs.statSync(path).size
  })
  const totalKB = Math.floor(total / 1000)
  if (totalKB > 999)  return ((totalKB / 1000).toString()) + ' MB'
  else return (totalKB.toString()) + ' KB'
}

const imageExtensions = ["png", "webp"]

const go = (obj: object):ReadonlyArray<string> => 
  Object.values(obj).flatMap((value) => {
    if(typeof value === 'string') {
      const isPicture = !!imageExtensions.find((ext) => value.endsWith(ext))
      if(isPicture) {
        return [value] as ReadonlyArray<string | undefined>
      } else return [undefined]
    } else if (typeof value === 'object') {
      return go(value)
    } else return [undefined]
  }).filter((str): str is string => str !== undefined)

const totalFilesSize =  getfilesize(go(config))


export default () => {
  return ( 
  <header className="grid grid-rows-2  w-full z-50 sticky top-0">
    <header className="hidden md:flex sticky top-0 h-24 w-full justify-between border-b-2 border-purple-600 md:px-16 lg:px-20 items-center font-menu font-semibold z-50 bg-purple-void">
      <SpyralsLogo />
      <NavigationAndSocial />
    </header>
    <div className="justify-self-end border-b-2 border-l-2 border-purple-600 pt-4 px-4 items-center font-menu font-semibold bg-purple-void h-20">
      <ConsoMax conso={totalFilesSize}/>      
    </div>
  </header>
  )
}





