import { Button, Input, Select, SelectItem } from '@heroui/react'
import { useForm } from "react-hook-form"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from '../../schema/schema';
import { boolean } from 'zod';


export default function Register() {

  const { register, handleSubmit ,formState: { errors , touchedFields }} = useForm({
    defaultValues: {
      name: '',
    email:'',
    password:'',
    rePassword:'',
    dateOfBirth:'',
    gender:''
    },
    resolver: zodResolver(schema),
    mode: "onBlur",
    reValidateMode:'onBlur',
  })

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
            <Input isInvalid={Boolean(errors.name && touchedFields.name)} errorMessage={errors.name?.message}
            {...register("name")} label="name" type="text" />

            <Input isInvalid={Boolean(errors.email && touchedFields.email)}  errorMessage={errors.email?.message}
            {...register("email")} label="Email" type="email" />  
            <Input isInvalid={Boolean(errors.password && touchedFields.password)}  errorMessage={errors.password?.message}
            {...register("password")} label="password" type="password" />
            <Input isInvalid={Boolean(errors.rePassword && touchedFields.rePassword)}  errorMessage={errors.rePassword?.message}
            {...register("rePassword")} label="REpassword" type="password" />

          <div className="flex gap-4">
            <Input isInvalid={Boolean(errors.dateOfBirth && touchedFields.dateOfBirth)}  errorMessage={errors.dateOfBirth?.message}
            {...register("dateOfBirth")} label="Date Of Birth" placeholder="Enter your email" type="date" />
            <Select isInvalid={Boolean(errors.gender && touchedFields.gender)}  errorMessage={errors.gender?.message}
            {...register("gender")} className="max-w-xs" label="Select Gender">
            <SelectItem value='male' key="male">Male</SelectItem>
            <SelectItem isInvalid={Boolean(errors.gender && touchedFields.gender)}  errorMessage={errors.gender?.message}
            value='female' key="female">Female</SelectItem>
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
