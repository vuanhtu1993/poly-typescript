import * as Yup from 'yup'

export const signupSchema = Yup.object({
    firstName: Yup.string().required("Trường dữ liệu bắt buộc"),
    lastName: Yup.string().required("Trường dữ liệu bắt buộc"),
    email: Yup.string().email("Email không hợp lệ").required("Trường dữ liệu bắt buộc"),
    password: Yup.string().min(6).required("Trường dữ liệu bắt buộc"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match'),
})

export type SignupForm = Yup.InferType<typeof signupSchema>

export interface IUser {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string
}

export const signinSchema = Yup.object({
    email: Yup.string().email("Email không hợp lệ").required("Trường dữ liệu bắt buộc"),
    password: Yup.string().min(6).required()
})

export type SigninForm = Yup.InferType<typeof signinSchema>

