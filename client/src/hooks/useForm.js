import { useEffect, useState } from 'react';

export function useForm(initialState, submitCallback, reinitializeForm = false) {
    const [values, setValues] = useState(initialState);

    useEffect(() => {
        if (reinitializeForm) {
            setValues(initialState);
        }
    }, [initialState, reinitializeForm])

    const changeHandler = (e) => {
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault();

        submitCallback(values);
    }

    return {
        values,
        changeHandler,
        submitHandler,
    }
}