import React from 'react'
import { LevelProvider } from './Context'

const Section = props => {
  const { as, ...other } = props

  return <LevelProvider as={as || 'section'} {...other} />
}

export default Section
