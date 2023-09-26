import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tarea } from "../../types";

export const fetchTareas = createAsyncThunk("tareas/cargarTareasIniciales", async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return JSON.parse(localStorage.getItem("tareas") ?? "[]");
});

type State = {
    tareas: Tarea[];
    isLoading: boolean;
};
const initialState: State = {
    tareas: [],
    isLoading: false,
};

export const tareaSlice = createSlice({
    name: "tareas",
    initialState,
    reducers: {
        agregarTarea: (state: State, action: PayloadAction<Tarea>) => {
            state.tareas.push(action.payload);
            localStorage.setItem("tareas", JSON.stringify(state.tareas));
        },
        borrarTarea: (state: State, action: PayloadAction<number>) => {
            const idAEliminar = action.payload;
            state.tareas = state.tareas.filter((tarea) => tarea.id !== idAEliminar);
            localStorage.setItem("tareas", JSON.stringify(state.tareas));
            return state;
        },
        cambiarEstadoDeTarea: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            const tarea = state.tareas.find((tarea) => tarea.id === id);
            if (tarea) {
                tarea.realizada = !tarea.realizada;
            }
            localStorage.setItem("tareas", JSON.stringify(state.tareas));
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTareas.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchTareas.fulfilled, (state, action) => {
                state.isLoading = false;
                state.tareas = action.payload;
            });
    },
});

export const { agregarTarea, borrarTarea, cambiarEstadoDeTarea } = tareaSlice.actions;
