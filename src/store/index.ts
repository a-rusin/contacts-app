/** @format */

import { configureStore } from "@reduxjs/toolkit";
import {
  contactsApiMiddleware,
  contactsApiReducer,
  contactsApiReducerPath,
} from "./contacts";
import {
  groupsApiMiddleware,
  groupsApiReducer,
  groupsApiReducerPath,
} from "./groups";

export const store = configureStore({
  reducer: {
    [contactsApiReducerPath]: contactsApiReducer,
    [groupsApiReducerPath]: groupsApiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([contactsApiMiddleware, groupsApiMiddleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
