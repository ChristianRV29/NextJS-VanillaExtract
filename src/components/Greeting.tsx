import React, { FC } from 'react'

interface Props {
    message: string;
}

export const Greeting: FC<Props> = ({ message }) => {
  return (
    <h1>{message}</h1>
  )
}
