import React, { useContext, useReducer } from 'react'

const logError = message => {
  if (process.env.NODE_ENV === 'development') {
    console.error(`Error: ${message}`)
  }
}

const initialState = { title: undefined }

const TitleContext = React.createContext(() =>
  logError('Title should be used inside a Main component')
)
const LevelContext = React.createContext(2)

const reducer = (state, action) => {
  switch (action.type) {
    case 'setTitle':
      if (state.title !== undefined) {
        logError('There should only be one Title component on the page')
      }
      return { title: action.title }
    default:
      return state
  }
}

const TitleProvider = props => {
  const { children } = props
  const [_, dispatch] = useReducer(reducer, initialState)
  const setTitle = title => dispatch({ type: 'setTitle', title })

  return (
    <TitleContext.Provider value={setTitle}>
      {children}
    </TitleContext.Provider>
  )
}

const LevelProvider = props => {
  const { as: As, value, ...other } = props
  const level = useContext(LevelContext)
  const nextLevel = Math.min(level + 1, 6)

  return (
    <LevelContext.Provider value={value || nextLevel}>
      <As {...other} />
    </LevelContext.Provider>
  )
}

export { TitleContext, TitleProvider, LevelContext, LevelProvider }
