// // store/store.ts
// import { configureStore } from "@reduxjs/toolkit";

// import rootReducer from "../rootReducer";
// import { baseApi } from "../api/baseApi";
// const apiMiddleware = baseApi.middleware;
// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(apiMiddleware),
// });

// // Types for the store
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;




import { configureStore } from "@reduxjs/toolkit";

// api
import { baseApi } from "../api/baseApi";


// Reducer


// redux persisi
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "auth",
  storage,
};

const persistAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistAuthReducer,
  },

  // APIs Middleware connection ...
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      foodApi.middleware,
      userApi.middleware,
      orderApi.middleware,
      commentApi.middleware,
      replyApi.middleware,
      voteApi.middleware,
      saveBlogApi.middleware,
      profileApi.middleware,
      searchApi.middleware,
      authApi.middleware
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
