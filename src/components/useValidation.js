import { useState, useEffect } from 'react'


function useValidation (initialState, auth) {
    const [values, setValues] = useState(initialState)
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
  
    useEffect(() => {
        if (submitted) {
          const noErrors = Object.keys(errors).length === 0;
          if (noErrors) {
            alert("authenticated!", values.username, values.email, values.password);
            setSubmitted(false);
          } else {
            setSubmitted(false);
          }
        }
      }, []);
    
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const validationErrors = auth(values);
        setErrors(validationErrors);
        setSubmitted(true);

        console.log(
            `Username: ${values.username}, E-mail: ${values.email}, Password: ${values.password}`
        );
    }

    //pass handleChange as property and value so that it can be read on SignUp
    return {
        handleChange,
        handleSubmit,
        values,
        errors,
        submitted
    }
}

export default useValidation
