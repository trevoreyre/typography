import { addDecorator, configure } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

addDecorator(withKnobs)

const loadStories = () => {
  require('../src/Heading.stories.js')
}

configure(loadStories, module)
