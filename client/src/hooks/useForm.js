import { useState } from 'react';

export function useForm(initialState, submitCallback) {
    const [state, setState] = useState(initialState);

    const changeHandler = (e) => {
        setState(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const submitHandler = () => {
        e.preventDefault();

        submitCallback(state);
    }

    return {
        state,
        changeHandler,
        submitHandler
    }
}