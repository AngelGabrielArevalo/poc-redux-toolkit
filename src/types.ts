import { store } from "./store/store";

export type Tarea = {
    id: number;
    descripcion: string;
    realizada: boolean;
};
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
