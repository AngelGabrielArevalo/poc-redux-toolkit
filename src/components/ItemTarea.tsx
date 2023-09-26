import { Button } from "react-bootstrap";
import { Tarea } from "../types";
import { JSX } from "react";
import { useDispatch } from "react-redux";
import { borrarTarea, cambiarEstadoDeTarea } from "../store/slices/tareaSlice";

type Props = {
    tarea: Tarea;
};

export function ItemTarea({ tarea }: Props): JSX.Element {
    const dispatch = useDispatch();

    return (
        <li className="list-group-item d-flex justify-content-between">
            <span
                className={`align-self-center ${tarea.realizada ? "text-decoration-line-through" : ""}`}
            >
                {tarea.descripcion}
            </span>
            <div>
                <Button
                    className={`btn btn-${tarea.realizada ? "success" : "secondary"}`}
                    onClick={() => {
                        dispatch(cambiarEstadoDeTarea(tarea.id));
                    }}
                >
                    <i className={`bi bi-toggle2-${tarea.realizada ? "on" : "off"}`}></i>
                </Button>
                <Button
                    className="btn btn-danger"
                    onClick={() => {
                        dispatch(borrarTarea(tarea.id));
                    }}
                >
                    <i className="bi bi-trash-fill"></i>
                </Button>
            </div>
        </li>
    );
}
