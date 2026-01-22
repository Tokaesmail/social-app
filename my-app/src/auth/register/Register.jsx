import { Button, Input, Select, SelectItem } from '@heroui/react'
import { useForm } from "react-hook-form"
import React from 'react'

export default function Register() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: '',
    email:'',
    password:'',
    rePassword:'',
    dateOfBirth:'',
    gender:''
    }
  }
  )

  function onSubmit(data) {
    console.log('submit',data);
  }
  return (
    <>
      <div className="register bg-gray-200 min-h-screen flex justify-center items-center">
        <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center'>
          <h2 className='text-3xl font-extrabold mb-6 text-sky-400'>Register now</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            <Input {...register("name")} label="name" type="text" />
            <Input {...register("email")} label="Email" type="email" />
            <Input {...register("password")} label="password" type="password" />
            <Input {...register("rePassword")} label="REpassword" type="password" />

          <div className="flex gap-4">
            <Input {...register("dateOfBirth")} label="Date Of Birth" placeholder="Enter your email" type="date" />
            <Select {...register("gender")} className="max-w-xs" label="Select Gender">
            <SelectItem value='male' key="male">Male</SelectItem>
            <SelectItem value='female' key="female">Female</SelectItem>
        </Select>
          </div>
          <Button type="submit" color="primary" variant="shadow">
            submit
          </Button>
          </div>
          
          </form>
        </div>
      </div>
    </>
  )
}
