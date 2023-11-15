import React from 'react'
import SpyralsLogo from './spyrals-logo'
import NavigationAndSocial from './navigation-and-social'
import ConsoMax from './conso'
import config from '../../../utils/config'
import fs from 'fs'


//const paths = ['./images/merlin-humain.webp', './images/julien-humain.webp', './images/fabien-humain.webp']



const bettergetfilesize = (paths: ReadonlyArray<string>):number => {
  let total = 0
  paths.forEach((path) => {
    total += fs.statSync(path).size
  })
  return total
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
  


const totalFilesSize = bettergetfilesize(go(config))


//console.log('totalFilesSize = '+totalFilesSize)



// TODO
// Normaliser la gestion des path, actuellement certain path du front ont un path pourri, vue sur au moins trois objet ds config comme spyrals





/*
const getTotalFilesSize = (paths: string[], cb:any):number => {
  let test = 0
  paths.forEach(element => {
    fs.stat(element, (err:any, stats: {size:any}) => {
      if (err) {
          // Handle errors here
          console.log(err)
          return
      }
      test += cb(stats.size)
    })
  })
  console.log(test)
  return test
}

let totalFilesSize = getTotalFilesSize(
  paths,
  (fileSize: any) => {
    totalFilesSize += fileSize
    return totalFilesSize
  }
)

console.log("totalFilesSize = "+totalFilesSize)

*/


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





