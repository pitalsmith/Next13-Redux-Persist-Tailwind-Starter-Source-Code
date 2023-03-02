import {configureStore} from "@reduxjs/toolkit";
import userReducer from '../slice/userSlices';
import { todoReducer } from "../reducer/todoReducer";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import {persistReducer} from "redux-persist";


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const reducer = combineReducers ({
    user: userReducer,
    todos: todoReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

// export const store = configureStore ({
//     reducer: persistReducer
// // })



const rootReducer =  combineReducers({
    user: userReducer,
    todos: todoReducer
})

export function makeStore() {
    return configureStore ({
        reducer:   persistedReducer,
    })
}

export const store = makeStore()
//export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch