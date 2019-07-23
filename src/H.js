import React, { useContext } from 'react'
import { LevelContext } from './Context'

const H = props => {
  const { as, ...other } = props
  const level = useContext(LevelContext)
  const Heading = as || 'h' + level

  return <Heading {...other} />
}

const H1 = props => <H data-h1 {...props} />
const H2 = props => <H data-h2 {...props} />
const H3 = props => <H data-h3 {...props} />
const H4 = props => <H data-h4 {...props} />
const H5 = props => <H data-h5 {...props} />
const H6 = props => <H data-h6 {...props} />

export default H
export { H1, H2, H3, H4, H5, H6 }
