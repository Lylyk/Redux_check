import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "../Reducer";
import todoReducer from './Slices/todoslice'
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/es/storage";


export const store = configureStore({
    reducer: {
        task : persistReducer({
            key: 'task',
            storage
            }, todoReducer)
            
        }
    
})

export const persistor = persistStore(store)