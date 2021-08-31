import * as yup from "yup"

const SignUpFormSchema = yup.object().shape({
  firstName: yup.string().required(`Please enter your first name`),
  lastName: yup.string().required(`Please enter your last name`),
  email: yup.string().required(`Please enter your email`).email(`Please enter a valid email`),
  password: yup.string().required(`Please enter a password`).min(8, `Password must be at least 8 characters long`),
})

export default SignUpFormSchema
