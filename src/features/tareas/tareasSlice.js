import { createSlice } from '@reduxjs/toolkit';


const tareasSlice = createSlice({
    name: 'tareas',
    initialState: {
        value: [],
    },
    reducers: {
        create: (state, action) => {
            state.value = [
                ...state.value,
                {
                    texto: action.payload,
                    completado: false 
                }
            ]
        },
        completar: (state, action) => {
            const index = action.payload;
            state.value[index].completado = !state.value[index].completado
        },
        eleminar: (state, action) => {
            const index = action.payload
            const tareaParaEleminar = state.value[index];
            state.value = state.value.filter((tarea) => tarea !== tareaParaEleminar)
        }
    }
})

export const {create, completar, eleminar} = tareasSlice.actions

export default tareasSlice.reducer