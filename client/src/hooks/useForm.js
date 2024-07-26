import { useState } from 'react';

export function useForm(initialState, submitCallback) {
    const [values, setState] = useState(initialState);

    const changeHandler = (e) => {
        setState(values => ({
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
        submitHandler
    }
}