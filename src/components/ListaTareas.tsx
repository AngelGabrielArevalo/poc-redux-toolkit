import { Tarea } from "../types";
import { ItemTarea } from "./ItemTarea";

type Props = {
    tareas: Tarea[];
};

export function ListaTareas({ tareas }: Props) {
    return (
        <ul className="list-group">
            {tareas.map((tarea) => (
                <ItemTarea
                    key={tarea.id}
                    tarea={tarea}
                />
            ))}
        </ul>
    );
}
