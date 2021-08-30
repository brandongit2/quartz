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
			className="md:grid block"
			style={{gridTemplate: `
				"firstName lastName"
				"email email"
				"password confirmPassword"
				"button button"
			`}}
		>
			<fieldset style={{gridArea: `firstName`}} className="m-2">
				<label htmlFor="first-name">First name</label>
				<input className={`block ${errors.firstName && `border-danger`}`} {...register(`firstName`)} id="first-name" type="text" />
				<p className="text-danger text-sm">{errors.firstName?.message}</p>
			</fieldset>

			<fieldset style={{gridArea: `lastName`}} className="m-2">
				<label  htmlFor="last-name">Last name</label>
				<input className={`block ${errors.lastName && `border-danger`}`} {...register(`lastName`)} id="last-name" type="text" />
				<p className="text-danger text-sm">{errors.lastName?.message}</p>
			</fieldset>

			<fieldset style={{gridArea: `email`}} className="m-2">
				<label htmlFor="email">Email</label>
				<input className={`md:w-full block ${errors.email && `border-danger`}`} {...register(`email`)} id="email" type="email" />
				<p className="text-danger text-sm">{errors.email?.message}</p>
			</fieldset>

			<fieldset style={{gridArea: `password`}} className="m-2">
				<label htmlFor="password">Password</label>
				<input className={`block ${errors.password && `border-danger`}`} {...register(`password`)} id="password" type="text" />
				<p className="text-danger text-sm">{errors.password?.message}</p>
			</fieldset>

			<fieldset style={{gridArea: `confirmPassword`}} className="m-2">
				<label htmlFor="confirm-password">Confirm password</label>
				<input className={`block ${errors.confirmPassword && `border-danger`}`} {...register(`confirmPassword`)} id="confirm-password" type="text" />
				<p className="text-danger text-sm">{errors.confirmPassword?.message}</p>
			</fieldset>

			<input style={{gridArea: `button`}} className="button m-2" type="submit" />
		</form>
	)
}

export default SignUpForm
