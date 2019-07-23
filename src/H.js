import React, { useContext } from 'react'
import Context from './Context'

const H1 = props => {
  const { as, ...other } = props
  const level = useContext(Context)
  const Heading = as || 'h' + level

  return <Heading data-h1 {...other} />
}

const H2 = props => {
  const { as, ...other } = props
  const level = useContext(Context)
  const Heading = as || 'h' + level

  return <Heading data-h2 {...other} />
}

const H3 = props => {
  const { as, ...other } = props
  const level = useContext(Context)
  const Heading = as || 'h' + level

  return <Heading data-h3 {...other} />
}

const H4 = props => {
  const { as, ...other } = props
  const level = useContext(Context)
  const Heading = as || 'h' + level

  return <Heading data-h4 {...other} />
}

const H5 = props => {
  const { as, ...other } = props
  const level = useContext(Context)
  const Heading = as || 'h' + level

  return <Heading data-h5 {...other} />
}

const H6 = props => {
  const { as, ...other } = props
  const level = useContext(Context)
  const Heading = as || 'h' + level

  return <Heading data-h6 {...other} />
}

export { H1, H2, H3, H4, H5, H6 }
