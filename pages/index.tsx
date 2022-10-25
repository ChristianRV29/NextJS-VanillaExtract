import type { NextPage } from 'next'
import { Greeting } from '~src/components/Greeting/Greeting'

const Home: NextPage = () => {
  return (
      <Greeting variant='light' message='Hello world!' />
  )
}

export default Home
