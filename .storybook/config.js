import { addDecorator, configure } from '@storybook/react'

const loadStories = () => {
  require('../src/Typography.stories.js')
}

configure(loadStories, module)
