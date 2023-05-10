// packages
import { configureStore } from '@reduxjs/toolkit';
//
import { todoApi } from './api/todoApi';
import { userApi } from './api/userApi';


const apiMiddlewares = [todoApi.middleware, userApi.middleware];

const store = configureStore({
    reducer: {
        [todoApi.reducerPath]: todoApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    // show the devTools only in development
    devTools: process.env.NODE_ENV !== 'production',
    // adding the api middlewares enables caching, invalidation, polling and other useful features of `rtk-query`
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddlewares),
});

export default store;