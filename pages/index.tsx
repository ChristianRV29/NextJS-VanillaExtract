import type { NextPage } from 'next'
import { Greeting } from '~src/components/Greeting/Greeting'

const Home: NextPage = () => {
  return (
    <Greeting message='Hello world!' />
  )
}

export default Home
