import React from 'react'
import { storiesOf } from '@storybook/react'
import { H1, H2, H3, H4, H5, H6 } from './H'
import Section from './Section'
import './style.css'

storiesOf('Heading', module)
  .add('basic', () => (
    <main>
      <H1>An H1 tag</H1>
      <H1 as="h1">The real H1</H1>
      <H2>An H2 tag</H2>
      <H3>An H3 tag</H3>
      <Section>
        A new section
        <H1>An H1 tag</H1>
        <H2>An H2 tag</H2>
        <H3>An H3 tag</H3>
      </Section>
    </main>
  ))
