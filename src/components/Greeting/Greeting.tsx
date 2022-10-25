import React, { FC } from 'react'

import { GreetingProps } from '~src/@types/interfaces'
import { container, greetingText } from '~src/styles/index.css'


export const Greeting: FC<GreetingProps> = ({ message, variant }) => {
  return (
    <div className={container[variant]}>
      <h1 className={greetingText}>{message}</h1>
    </div>
  )
}
