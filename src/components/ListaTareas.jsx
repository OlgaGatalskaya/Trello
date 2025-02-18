import { useDispatch, useSelector } from 'react-redux'
import { completar, eleminar } from '../features/tareas/tareasSlice'

export const ListaTareas = () => {

    const tareas = useSelector(state => state.tareas.value)

    console.log(tareas)
    
    const dispach = useDispatch();

    const completarTarea = (index) => {
        dispach(completar(index))
    }

    const eleminarTarea = (index) => {
        dispach(eleminar(index))
    }

    return (
        <div>
            
            {tareas.map((tarea, index) => (
                <div key={index}>
                    <span>{tarea.texto}</span>
                    <button onClick={() => completarTarea(index)}>{tarea.completado ? 'Pendiente' : 'Completar'}</button>
                    <button onClick={() => eleminarTarea(index)}>Eliminar</button> 
                </div>
            ))}
        </div>
    )
}
