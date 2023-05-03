import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'user', // Nome desse reducer
    initialState: { // Como os dados do store devem estar inicialmente
        name: 'Yudi',
        age: 0
    },
    reducers: { // Aqui serão informados quais as actions possíveis
        setName: (state, action) => {
            state.name = action.payload; // O state será alterado para o que vier informado dentro do parâmetro action, nesse caso é a `name, na de baixo será `age`
        },
        setAge: (state, action) => {
            state.age = action.payload;
        }
    }
})

export const { setName, setAge } = slice.actions
export default slice.reducer;
