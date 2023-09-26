import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tarea } from "../../types";

const initialState: Tarea[] = JSON.parse(localStorage.getItem("tareas") ?? "[]") as unknown as Tarea[];

export const tareaSlice = createSlice({
    name: "tareas",
    initialState,
    reducers: {
        agregarTarea: (state: Tarea[], action: PayloadAction<Tarea>) => {
            state.push(action.payload);
            localStorage.setItem("tareas", JSON.stringify(state));
        },
        borrarTarea: (state: Tarea[], action: PayloadAction<number>) => {
            const idAEliminar = action.payload;
            state = state.filter((tarea) => tarea.id !== idAEliminar);
            localStorage.setItem("tareas", JSON.stringify(state));
            return state;
        },
        cambiarEstadoDeTarea: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            const tarea = state.find((tarea) => tarea.id === id);
            if (tarea) {
                tarea.realizada = !tarea.realizada;
            }
            localStorage.setItem("tareas", JSON.stringify(state));
        },
    },
});

export const { agregarTarea, borrarTarea, cambiarEstadoDeTarea } = tareaSlice.actions;
