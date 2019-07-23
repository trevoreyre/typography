import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs';
import Title from './Title'
import { H1, H2, H3, H4, H5, H6 } from './H'
import Main from './Main'
import Section from './Section'
import './style.css'

storiesOf('Heading', module)
  .add('basic', () => (
    <>
      <Main>
        <H1>An H1 tag</H1>
        <Title>A Title tag <span>{text('Title', 'title variable')}</span></Title>
        <H2>An H2 tag</H2>
        <H3>An H3 tag</H3>
        <Section>
          A new section
          <H1>An H1 tag</H1>
          <H2>An H2 tag</H2>
          <H3>An H3 tag</H3>
        </Section>
      </Main>
    </>
  ))
