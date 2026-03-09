import { zodResolver } from "@hookform/resolvers/zod"
import { schema } from "./models/form.models"
import { useForm } from "react-hook-form"
import InputForm from "./components/customInput"
import './login.css'
import { useUser } from "../../hooks/useUser"
import { email } from "zod"
import { Navigate, useNavigate } from "react-router-dom"

export const FormLogin = () => {
    const {login} = useUser();
    const navigate = useNavigate()

    const {control, reset, handleSubmit, formState: {errors}} = useForm(
        {
            resolver: zodResolver(schema),
            mode: 'onBlur',
            defaultValues: {
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        }
    )

    const onSubmit = (data) => {
        console.log(data)
        login({name: data.name, email: data.email, password: data.password})
        reset()
        localStorage.setItem('loged', true)
        alert('Login Success')
        navigate("/")
    }

    return (
        <section className="form-container">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
            <h1>Login</h1>
                <div className="input-container">
                <InputForm name="name" control={control} label="Name" type="text" error={errors.name}/>

                <InputForm name="email" control={control} label="Email" type="email" error={errors.email}/>

                <InputForm name="password" control={control} label="Password" type="password" error={errors.password}/>

                <InputForm name="confirmPassword" control={control} label="Confirm Password" type="password" error={errors.confirmPassword}/>

                <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
        </section>
    )
}