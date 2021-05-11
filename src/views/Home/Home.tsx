import React from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '../../components/Input'
import { HomeWrapper } from './Home.styled'

const Home = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = () => console.log('asdf')

  return (
    <HomeWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('address')} />
      </form>
    </HomeWrapper>
  )
}

export default Home
