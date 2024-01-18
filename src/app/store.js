import { configureStore } from "@reduxjs/toolkit";
import { puppyBolwApi } from "../api/puppyBowlApi";

const store = configureStore({
    reducer:{
        [puppyBolwApi.reducerPath]: puppyBolwApi.reducer
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(puppyBolwApi.middleware)
})

export default store;