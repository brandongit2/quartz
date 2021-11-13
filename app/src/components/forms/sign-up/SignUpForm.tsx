import {yupResolver} from "@hookform/resolvers/yup/dist/yup"
import clsx from "clsx"
import React from "react"
import {useForm} from "react-hook-form"

import type {FC} from "react"
import type {SubmitHandler} from "react-hook-form"

import SignUpFormSchema from "./SignUpFormSchema"

type FormValues = {
  firstName: string
  lastName: string
  email: string
  password: string
}

const SignUpForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FormValues>({
    resolver: yupResolver(SignUpFormSchema),
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="sm:grid block"
      style={{
        gridTemplate: `
          "firstName lastName"
          "email email"
          "password password"
          "button button"
        `,
      }}
    >
      <fieldset style={{gridArea: `firstName`}} className="m-2">
        <label htmlFor="first-name">First name</label>
        <input
          className={clsx(`block`, errors.firstName && `border-danger`)}
          {...register(`firstName`)}
          id="first-name"
          type="text"
        />
        <p className="text-danger text-sm">{errors.firstName?.message}</p>
      </fieldset>

      <fieldset style={{gridArea: `lastName`}} className="m-2">
        <label htmlFor="last-name">Last name</label>
        <input
          className={clsx(`block`, errors.lastName && `border-danger`)}
          {...register(`lastName`)}
          id="last-name"
          type="text"
        />
        <p className="text-danger text-sm">{errors.lastName?.message}</p>
      </fieldset>

      <fieldset style={{gridArea: `email`}} className="m-2">
        <label htmlFor="email">Email</label>
        <input
          className={clsx(`sm:w-full block`, errors.email && `border-danger`)}
          {...register(`email`)}
          id="email"
          type="email"
        />
        <p className="text-danger text-sm">{errors.email?.message}</p>
      </fieldset>

      <fieldset style={{gridArea: `password`}} className="m-2">
        <label htmlFor="password">Password</label>
        <input
          className={clsx(`sm:w-full block`, errors.password && `border-danger`)}
          {...register(`password`)}
          id="password"
          type="text"
        />
        <p className="text-danger text-sm">{errors.password?.message}</p>
      </fieldset>

      <input style={{gridArea: `button`}} className="button m-2" type="submit" />
    </form>
  )
}

export default SignUpForm
