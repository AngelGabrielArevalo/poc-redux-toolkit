import { useState, ChangeEvent } from "react";

interface FormFunctions<T> {
    formState: T;
    onInputChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onResetForm: () => void;
}

export function useForm<T>(initialForm: T): FormFunctions<T> {
    const [formState, setFormState] = useState<T>(initialForm);

    const onInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    };
}
