import React, { FC } from 'react'

import { GreetingProps } from '~src/@types/interfaces'
import { greetingText } from '~src/styles/index.css'


export const Greeting: FC<GreetingProps> = ({ message }) => {
  return (
   <h1 className={greetingText}>{message}</h1>
  )
}
