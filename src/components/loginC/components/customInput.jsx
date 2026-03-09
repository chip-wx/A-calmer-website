
import { Controller } from "react-hook-form"
import './customInput.css'

const InputForm = ({name, control, label, type, error}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <Controller 
                name={name}
                control={control}
                render={({field}) => <input id={name} type={type} {...field} 
                    className={`form-control ${error ? 'is-invalid' : ''}`}/>
                }
            />
            {error && <div className="error">{error.message}</div>}
        </div>
    )
}

export default InputForm