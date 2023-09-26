import { JSX, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../types";
import { ListaTareas } from "./ListaTareas";
import { AgregarTarea } from "./AgregarTarea";
import { fetchTareas } from "../store/slices/tareaSlice";
import { Spinner } from "react-bootstrap";

function AppTareas(): JSX.Element {
    const dispatch = useDispatch();
    const { tareas, isLoading } = useSelector((state: RootState) => state.tareas);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        dispatch(fetchTareas() as any);
    }, [dispatch]);

    return (
        <>
            <h1 className="text-center">Mis Tareas</h1>
            <hr />

            <div className="row">
                <h4>
                    <small>Tareas: {isLoading ? "-" : tareas.length} </small>
                    <small>
                        Pendientes:{" "}
                        {isLoading ? "-" : tareas.filter((tareas) => !tareas.realizada).length}
                    </small>{" "}
                </h4>
                <div className="col-7">
                    {isLoading ? (
                        <div className="text-center">
                            <Spinner animation="border" variant="primary" className="mt-5"/>
                        </div>
                    ) : (
                        <ListaTareas tareas={tareas} />
                    )}
                </div>

                <div className="col-5">
                    <h4>Agregar Tarea</h4>
                    <hr />
                    <AgregarTarea />
                </div>
            </div>
        </>
    );
}

export default AppTareas;
