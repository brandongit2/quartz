import { yupResolver } from '@hookform/resolvers/yup';
import {SubmitHandler, useForm} from 'react-hook-form'

import type {FC} from "react"

import SignUpFormSchema from './SignUpFormSchema';

type FormValues = {
	firstName: string,
	lastName: string,
	email: string,
	password: string,
	confirmPassword: string
}

const SignUpForm: FC = () => {
	const {register, handleSubmit, formState: {errors}} = useForm<FormValues>({
		resolver: yupResolver(SignUpFormSchema)
	})

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		console.log(data)
	}

	return (
		<form 
			noValidate
			onSubmit={handleSubmit(onSubmit)} 
			className="grid gap-x-4 gap-y-3"
			style={{gridTemplate: `
				"firstName lastName"
				"email email"
				"password confirmPassword"
				"button button"
			`}}
		>
			<fieldset style={{gridArea: `firstName`}}>
				<label htmlFor="first-name">First name</label>
				<input className={`block ${errors.firstName && `border-danger`}`} {...register(`firstName`)} id="first-name" type="text" />
				<p className="text-danger text-sm">{errors.firstName?.message}</p>
			</fieldset>

			<fieldset style={{gridArea: `lastName`}}>
				<label  htmlFor="last-name">Last name</label>
				<input className={`block ${errors.lastName && `border-red-700`}`} {...register(`lastName`)} id="last-name" type="text" />
				<p className="text-danger text-sm">{errors.lastName?.message}</p>
			</fieldset>

			<fieldset style={{gridArea: `email`}}>
				<label htmlFor="email">Email</label>
				<input className={`w-full block ${errors.email && `border-red-700`}`} {...register(`email`)} id="email" type="email" />
				<p className="text-danger text-sm">{errors.email?.message}</p>
			</fieldset>

			<fieldset style={{gridArea: `password`}}>
				<label htmlFor="password">Password</label>
				<input className={`block ${errors.password && `border-red-700`}`} {...register(`password`)} id="password" type="text" />
				<p className="text-danger text-sm">{errors.password?.message}</p>
			</fieldset>

			<fieldset style={{gridArea: `confirmPassword`}}>
				<label htmlFor="confirm-password">Confirm password</label>
				<input className={`block ${errors.confirmPassword && `border-red-700`}`} {...register(`confirmPassword`)} id="confirm-password" type="text" />
				<p className="text-danger text-sm">{errors.confirmPassword?.message}</p>
			</fieldset>

			<input style={{gridArea: `button`}} className="button mt-2" type="submit" />
		</form>
	)
}

export default SignUpForm
