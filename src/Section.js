import React, { useContext } from 'react'
import Context from './Context'

const Section = props => {
  const { as = 'section', ...other } = props
  const level = useContext(Context)
  const nextLevel = Math.min(level + 1, 6)
  const Component = as || 'section'

  return (
    <Context.Provider value={nextLevel}>
      <Component {...other} />
    </Context.Provider>
  )
}

export default Section
