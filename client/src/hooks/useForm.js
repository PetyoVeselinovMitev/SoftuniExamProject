import { useEffect, useState } from 'react';

export function useForm(initialState, submitCallback) {
    const [values, setValues] = useState(initialState);

    useEffect(() => {
        setValues(initialState);
    }, [initialState])

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