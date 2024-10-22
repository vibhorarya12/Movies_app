import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";


const Store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, // Disable serializable state invariant middleware
      }),
  });
export default Store;