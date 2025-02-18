import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { create } from '../features/tareas/tareasSlice'

export const Formulario = () => {

    const [nuevaTarea, setNuevaTarea] = useState("");
    

    const dispach = useDispatch();

    const addNuevaTarea = () => {
        console.log(nuevaTarea)
            dispach(create(nuevaTarea))
    }

    return (
        <div>
            <h1>TODO</h1>
            <input 
                type="text"
                value = {nuevaTarea}
                onChange={(e) => setNuevaTarea(e.target.value)}
            />
            <button onClick={addNuevaTarea}>Añadir</button>
        </div>
    )
}
