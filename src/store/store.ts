import { configureStore } from "@reduxjs/toolkit";
import { tareaSlice } from "./slices/tareaSlice";

export const store = configureStore({
    reducer: {
        tareas: tareaSlice.reducer,
    },
});
