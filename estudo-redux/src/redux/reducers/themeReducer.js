// Tentando criar um reducer sozinho

import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'theme',
    initialState: {
        status: 'light'
    },
    reducers: {
        setTheme: (state, action) => {
            state.status = action.payload; // Fiquei errando a configuração do reducer nesse ponto, não tinha me atentado que o `state` deve ser seguido do nome do initialState que eu quero alterar.
        }
    }
})


export const { setTheme } = slice.actions
export default slice.reducer