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
        dispatch(fetchTareas() as any);
    }, [dispatch]);

    return (
        <div className="container">
            <h1 className="text-center">Mis Tareas</h1>
            <hr />

            <div className="row">
                <div className="col-md-7">
                    <h4>
                        <small>Tareas: {isLoading ? "-" : tareas.length} </small>
                        <small>
                            Pendientes:{" "}
                            {isLoading ? "-" : tareas.filter((tareas) => !tareas.realizada).length}
                        </small>{" "}
                    </h4>

                    {isLoading ? (
                        <div className="text-center">
                            <Spinner animation="border" variant="primary" className="mt-5" />
                        </div>
                    ) : (
                        <ListaTareas tareas={tareas} />
                    )}
                </div>

                <div className="col-md-5 mt-4 mt-md-0">
                    <h4>Agregar Tarea</h4>
                    <hr />
                    <AgregarTarea />
                </div>
            </div>
        </div>
    );
}

export default AppTareas;
