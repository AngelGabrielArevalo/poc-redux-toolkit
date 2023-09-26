import { JSX } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../types";
import { ListaTareas } from "./ListaTareas";
import { AgregarTarea } from "./AgregarTarea";

function AppTareas(): JSX.Element {
    const tareas = useSelector((state: RootState) => state.tareas);

    return (
        <>
            <h1 className="text-center">Mis Tareas</h1>
            <hr />

            <div className="row">
                <h4>
                    <small>Tareas: {tareas.length} </small>
                    <small>Pendientes: {tareas.filter((tareas) => !tareas.realizada).length}</small>{" "}
                </h4>
                <div className="col-7">
                    <ListaTareas
                        tareas={tareas}
                    />
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
