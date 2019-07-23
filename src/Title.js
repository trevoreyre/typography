import React, { useContext, useEffect } from 'react'
import { TitleContext } from './Context'
import H from './H'

const Title = props => {
  const { children, ...other } = props
  const setTitle = useContext(TitleContext)

  useEffect(() => {
    setTitle(children)
  }, children)

  return <H as="h1" data-h1 data-title {...other}>{children}</H>
}

export default Title
