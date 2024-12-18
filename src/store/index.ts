import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { tablesSliceReducer } from "../appSlices";

const rootReducer = combineReducers({
  tablesSliceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
