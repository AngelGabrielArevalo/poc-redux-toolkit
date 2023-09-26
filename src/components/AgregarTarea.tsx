/* eslint-disable @typescript-eslint/no-explicit-any */
import { JSX } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../hooks/useForm";
import { Tarea } from "../types";
import { agregarTarea } from "../store/slices/tareaSlice";
import { Button } from "react-bootstrap";

type Form = {
    descripcion: string;
};

export function AgregarTarea(): JSX.Element {
    const dispatch = useDispatch();
    const { formState, onInputChange, onResetForm } = useForm<Form>({
        descripcion: "",
    });

    const onFormSubmit = (event: any): void => {
        event.preventDefault();
        if (formState.descripcion.length <= 5) return;

        const nuevaTarea: Tarea = {
            id: new Date().getTime(),
            realizada: false,
            descripcion: formState.descripcion,
        };

        dispatch(agregarTarea(nuevaTarea));
        onResetForm();
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="Descripción..."
                className="form-control"
                name="descripcion"
                value={formState.descripcion}
                onChange={onInputChange}
            />

            <Button type="submit" className="btnbtn-primary mt-1">
                Agregar
            </Button>
        </form>
    );
}
