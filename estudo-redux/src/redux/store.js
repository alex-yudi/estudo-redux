import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./reducers/userReducer"; // Necessário fazer a importação dele, para adicionar no store

import themeReducer from "./reducers/themeReducer";

export const store = configureStore({
    reducer: {
        user: userReducer, // Escolho o nome que será dado para o reducer adicionado
        theme: themeReducer
    }
})

// export type RootState = ReturnType<typeof store.getState>;
    // Essa parte de cima é apenas para o Typescript, nele faço a exportação dos tipos dos reducers