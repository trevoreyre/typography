import React from 'react'
import { LevelProvider, TitleProvider } from './Context'

const Main = props => {
  const { as, ...other } = props

  return (
    <TitleProvider>
      <LevelProvider as={as || 'main'} value={2} {...other} />
    </TitleProvider>
  )
}

export default Main

